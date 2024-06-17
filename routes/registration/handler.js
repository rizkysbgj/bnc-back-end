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
    const createdUser = await registrationConnector.register(body);
  
    res.send(createdUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const sendOtpHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      registrationConnector
    },
  } = res;

  try {
    const otp = await registrationConnector.sendOtp(body);
  
    res.send(otp);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    registerHandler,
    sendOtpHandler
};