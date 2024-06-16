class AuthenticationConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async login(payload) {
    const url = `/login`

    const { data } = await this.client.post(url, payload, {});
    
    return data;
  }
}

module.exports = AuthenticationConnector;
