const axios = require('axios');

class Zakirly {
  constructor(baseURL = 'https://zakirly.daimooma.com/api') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async createStudent(studentData) {
    return this._request('post', '/students', studentData);
  }

  async updateStudent(unique_id, studentData) {
    return this._request('put', `/students/${unique_id}`, studentData);
  }

  async getStudentByEmail(email) {
    return this._request('get', `/students/email/${email}`);
  }

  async _request(method, url, data) {
    try {
      const config = {};
      if (method === 'get') {
        config.params = data;
      }
      const response = await this.api.request({
        method,
        url,
        data: method !== 'get' ? data : undefined,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
}

module.exports = Zakirly;
