class RegistrationConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async register(payload) {
    const url = `/registrations`

    const { data } = await this.client.post(url, payload, {});
    
    return data;
  }

  async sendOtp(payload) {
    const url = `/otps/init`

    const { data } = await this.client.post(url, payload, {});
    
    return data;
  }
}

module.exports = RegistrationConnector;
