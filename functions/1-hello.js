// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  // always return
  return {
    statusCode: 200,
    body: 'This serverless function success',
  };
};
