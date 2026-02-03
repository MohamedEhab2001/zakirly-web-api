const axios = require("axios");

class TeamsService {

  static async enableTeam(groupId, accessToken) {
    await axios.put(
      `https://graph.microsoft.com/v1.0/groups/${groupId}/team`,
      { memberSettings: {
        allowCreateUpdateChannels: true
      },
      messagingSettings: {
        allowUserEditMessages: true,
        allowUserDeleteMessages: true
      }},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }

  static async getGeneralChannel(groupId, accessToken) {
    const { data } = await axios.get(
      `https://graph.microsoft.com/v1.0/teams/${groupId}/channels`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return data.value.find(c => c.displayName === "General");
  }
}

module.exports = TeamsService;
