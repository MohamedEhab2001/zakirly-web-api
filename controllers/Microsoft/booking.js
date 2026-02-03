const axios = require("axios");
const GroupsService = require("../../services/Microsoft/groups");
const TeamsService = require("../../services/Microsoft/teams");
const MeetingsService = require("../../services/Microsoft/meetings");
const UserService = require("../../services/User");
const Zakirly = require("../../helpers/Zakirly");


exports.bookSession = async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/teamsa/mohamedelsherbeny@zakirly.onmicrosoft.com"
    );
    const data = response.data;
    const accessToken = data.account.token;
    const subject = req.body.subject;
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).toString().padStart(2, '0');
    const safeSubject = String(subject || 'Session').replace(/[^a-zA-Z0-9]/g, '');
    const formattedStamp = `${y}${m}${d}${hh}${mm}`;
    const groupName = `${safeSubject} Sessions ${formattedStamp}`;
 
    let group = await GroupsService.findGroup(groupName, accessToken);

    if (!group) {
      group = await GroupsService.createGroup(groupName, groupName, accessToken);
      
      // Wait a bit for group to be fully created
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      await TeamsService.enableTeam(group.id, accessToken);
    }

    const meeting = await MeetingsService.createOnlineMeeting(
      subject,
      req.body.start,
      req.body.end,
      accessToken
    );

    const channel = await TeamsService.getGeneralChannel(group.id, accessToken);
    await MeetingsService.postMeetingToChannel(
      group.id,
      channel.id,
      meeting.joinUrl,
      subject,
      accessToken
    );
    const { userId } = req.body;
    if (userId) {
      const userServant = new UserService(null, userId);
      const user = await userServant.getById();
      const zakirly = new Zakirly();
      const student = await zakirly.getStudentByEmail(user.email);
      const groups = [groupName];

      if (!student) {
        await zakirly.createStudent({
          email: user.email,
          name: user.name,
          account: ["mohamedelsherbeny@zakirly.onmicrosoft.com"],
          password: Math.random().toString(36).slice(-8),
          groups: [...groups],
        });
      } else {
        delete student._id;
        delete student.__v;
        await zakirly.updateStudent(student.unique_id, {
          ...student,
          groups: [...new Set([...(student.groups || []), ...groups])],
        });
      }
    }
    res.json({ 
      joinUrl: meeting.joinUrl,
      meetingId: meeting.id 
    });
  } catch (error) {
    console.error("Error creating meeting:", error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data || error.message 
    });
  }
};
