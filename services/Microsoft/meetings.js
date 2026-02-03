const axios = require("axios");

class MeetingsService {

  static async createOnlineMeeting(
    subject,
    startTime,
    endTime,
    accessToken
  ) {
    const { data } = await axios.post(
      `https://graph.microsoft.com/v1.0/me/onlineMeetings`,
      {
        subject,
        startDateTime: startTime,
        endDateTime: endTime
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return data;
  }

  // Optional: Associate meeting with a channel by posting a message
  static async postMeetingToChannel(
    groupId,
    channelId,
    meetingUrl,
    subject,
    accessToken
  ) {
    const { data } = await axios.post(
      `https://graph.microsoft.com/v1.0/teams/${groupId}/channels/${channelId}/messages`,
      {
        body: {
          contentType: "html",
          content: `<a href="${meetingUrl}">${subject}</a>`
        }
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return data;
  }
}

module.exports = MeetingsService;