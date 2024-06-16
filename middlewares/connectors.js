const axios = require('axios');

const { AuthenticationConnector } = require('../connectors')
const config = require('../config');

const { services: { user } } = config;

const connectors = (req, res, next) => {
  const authenticationConnectorClient = axios.create({ baseURL: 'http://localhost:3001', headers: {} });
  const authenticationConnector = new AuthenticationConnector({ client: authenticationConnectorClient });

  Object.assign(res.locals, {
    authenticationConnector
  });

  next();
}

module.exports = [connectors];
