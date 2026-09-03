import fs from 'node:fs/promises';

import AppError from '../utils/app-error.js';
import logger from '../utils/logger.js';

async function createFile(filePath) {
    try {
        const fileHandle = await fs.open(filePath, "wx");
        await fileHandle.close();
        logger.filesystem(`Created file at: ${filePath}`);
    } catch (error) {
        if (error.code === "EEXIST") {
            throw new AppError(`File already exists at: ${filePath}`, 409);
        } else {
            throw new AppError(`Couldn't create file at: ${filePath}`, 500);
        }
    }
}

async function removeFile(filePath) {
    try {
        await fs.unlink(filePath);
        logger.filesystem(`Deleted file at: ${filePath}`);
    } catch (error) {
        switch (error.code) {
            case "ENOENT":
                throw new AppError(`No such file at: ${filePath}`, 404);
            case "EISDIR":
                throw new AppError(`The specified file is a directory at: ${filePath}`, 409);
            default:
                throw new AppError(`Couldn't delete file at: ${filePath}`, 500);
        }
    }
}

export {
    createFile, 
    removeFile
};