const AWS = require('aws-sdk');

const DocumentClient = new AWS.DynamoDB.DocumentClient();
const TASKS_TABLE_NAME = process.env.TASKS_TABLE;


module.exports.handler = async () => {
  try {
    const data = await DocumentClient.scan({
      TableName: TASKS_TABLE_NAME,
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
