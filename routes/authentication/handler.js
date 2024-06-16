const loginHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      authenticationConnector
    },
  } = res;

  try {
    const token = await authenticationConnector.login(body);
  
    res.send(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    loginHandler
};