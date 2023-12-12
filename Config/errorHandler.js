// errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error to the console or your logging system
  
    // Set a default status code for errors
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    
    res.status(statusCode).json({
      error: {
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🍰' : err.stack, // Provide the error stack in development mode only
      },
    });
  };
  
  module.exports = errorHandler;
  