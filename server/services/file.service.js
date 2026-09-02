import fs from 'node:fs/promises';

import logger from '../utils/logger.js';

async function createFile(filePath) {
    try {
        const fileHandle = await fs.open(filePath, "wx");
        await fileHandle.close();
        logger.filesystem(`Created file at: ${filePath}`);
    } catch (error) {
        if (error.code === "EEXIST") {
            logger.error(`File already exists at: ${filePath}`)
        } else {
            logger.error(`Couldn't create file at: ${filePath}`)
        }
    }
}
