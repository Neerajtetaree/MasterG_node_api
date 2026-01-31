const dynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new dynamoDB.DocumentClient({
    region: proccess.env.REGION || 'ap-south-1',
    maxRetries: 3,
    httpOptions: {
        timeout: 5000
    }
});


module.exports = DocumentClient;