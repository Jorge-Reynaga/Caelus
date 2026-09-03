import AppError from '../utils/app-error.js';

import { createFile, removeFile } from '../services/file.service.js';

async function deleteFile(req, res) {
    const { path: filePath } = req.query;

    if (!filePath) {
        throw new AppError("File path is required", 400);
    }

    await removeFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
}

export { deleteFile };