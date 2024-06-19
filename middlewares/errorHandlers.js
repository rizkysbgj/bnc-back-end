const errorHandlers = (err, _, res, __) => {
  console.log(err.response);
  const { 
    response: {
      status = 500
    } = {}
  } = err;
  res.sendStatus(status || 500);
  res.send(err);
};

module.exports = [errorHandlers];