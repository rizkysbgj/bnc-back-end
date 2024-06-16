const axios = require('axios');

const { 
  AuthenticationConnector,
  RegistrationConnector
} = require('../connectors')
const config = require('../config');

const { services: { user } } = config;

const connectors = (req, res, next) => {
  const authenticationConnectorClient = axios.create({ baseURL: 'http://localhost:3001', headers: {} });
  const authenticationConnector = new AuthenticationConnector({ client: authenticationConnectorClient });

  const registrationConnectorClient = axios.create({ baseURL: 'http://localhost:3002', headers: {} });
  const registrationConnector = new RegistrationConnector({ client: registrationConnectorClient });

  Object.assign(res.locals, {
    authenticationConnector,
    registrationConnector
  });

  next();
}

module.exports = [connectors];
