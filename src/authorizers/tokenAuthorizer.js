const { response } = require("../../app");

exports.handler = (event, context, callback) => {
  const token = event.headers.authorization;
  console.log("Event:", JSON.stringify(event));
  console.log("Authorization token:", token);

  // Simple token validation logic
  if (token === "allow-token") {
    callback(null, generatePolicy("user", "Allow", event.methodArn));
  } else if (token === "deny-token") {
    callback(null, generatePolicy("user", "Deny", event.methodArn));
  } else {
    callback("Unauthorized");
  }
}

const generatePolicy = (principalId, effect, resource) => {
  const authResponse = {};
  authResponse.principalId = principalId;

  if (effect && resource) {
    const policyDocument = {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    };
    authResponse.policyDocument = policyDocument;
  }

  return authResponse;
}