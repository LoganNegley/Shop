const errorHandler = (error,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode

    res.status(statusCode).json({errorMessage: error.message})
};

const routeNotFound = (req, res, next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
};

module.exports = {
    errorHandler,
    routeNotFound
};