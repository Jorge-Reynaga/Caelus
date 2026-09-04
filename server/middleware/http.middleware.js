import logger from '../utils/logger.js';

function httpLogger(req, res, next) {
    logger.http(`${req.method} ${req.originalUrl}`);
    next();
}

export { httpLogger };