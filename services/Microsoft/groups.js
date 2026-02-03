const axios = require("axios");

class GroupsService {

  static async findGroup(groupName, accessToken) {
    const { data } = await axios.get(
      `https://graph.microsoft.com/v1.0/groups?$filter=displayName eq '${groupName}'`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );

    return data.value.length ? data.value[0] : null;
  }

  static async createGroup(groupName, description, accessToken) {
    const { data } = await axios.post(
      "https://graph.microsoft.com/v1.0/groups",
      {
        displayName: groupName,
        description,
        mailNickname: groupName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
        mailEnabled: true,
        securityEnabled: false,
        groupTypes: ["Unified"],
        "resourceBehaviorOptions": ["WelcomeEmailDisabled"]
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );

    return data;
  }
}

module.exports = GroupsService;
