import logger from '../utils/logger.js';

function errorHandler(error, req, res, next) {
    logger.error(error.message);
    res.status(error.status || 500).json({
        message: error.message || "Internal server error"
    });
}

export { errorHandler };