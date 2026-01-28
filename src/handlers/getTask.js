module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Task was get successfully"
      }),
    };
  };
  