const { TeacherSession } = require("../../models");

exports.createSession = (data) =>
  TeacherSession.create(data);
