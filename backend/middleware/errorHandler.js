const errorHandler = (error, req, res, next) => {
    console.error(error.stack);
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        success:false,
        message:error.message || "Internal server error"
    });
};

module.exports = errorHandler;