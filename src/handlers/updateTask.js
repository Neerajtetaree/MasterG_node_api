module.exports.handler = async (event) => {
    const id = event.pathParameters?.id; // safe access
  
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Task ID is required",
        }),
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Task updated successfully",
        id: id,
      }),
    };
  };
  