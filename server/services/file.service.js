import fs from 'node:fs/promises';

import logger from '../utils/logger.js';

async function createFile(filePath) {
    try {
        const fileHandle = await fs.open(filePath, "wx");
        await fileHandle.close();
        logger.filesystem(`Created file at: ${filePath}`);
    } catch (error) {
        if (error.code === "EEXIST") {
            logger.error(`File already exists at: ${filePath}`);
        } else {
            logger.error(`Couldn't create file at: ${filePath}`);
        }
    }
}

async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath);
        logger.filesystem(`Deleted file at: ${filePath}`);
    } catch (error) {
        switch (error.code) {
            case "ENOENT":
                logger.error(`No such file at: ${filePath}`);
                break;
            case "EISDIR":
                logger.error(`The specified file is a directory at: ${filePath}`);
                break;
            default:
                logger.error(`Couldn't delete file at: ${filePath}`);
        }
    }
}
