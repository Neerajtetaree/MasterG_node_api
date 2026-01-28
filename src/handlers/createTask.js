module.exports.handler = async (event) => {
    let data = null;
  
    if (event.body) {
      data = JSON.parse(event.body);
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Task created successfully",
        data: data,
      }),
    };
  };
  