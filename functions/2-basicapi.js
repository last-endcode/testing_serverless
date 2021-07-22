const person = require('../assets/data');
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
};
