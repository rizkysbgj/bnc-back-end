const registerHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      registrationConnector
    },
  } = res;

  try {
    const token = await registrationConnector.register(body);
  
    res.send(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    registerHandler
};