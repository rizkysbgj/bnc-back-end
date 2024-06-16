class RegistrationConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async register(payload) {
    const url = `/registration`

    const { data } = await this.client.post(url, payload, {});
    
    return data;
  }
}

module.exports = RegistrationConnector;
