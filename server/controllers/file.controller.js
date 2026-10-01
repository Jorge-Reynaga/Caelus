import AppError from '../utils/app-error.js';

import { createFile, removeFile } from '../services/file.service.js';

async function postFile(req, res, next) {
    const { path: filePath } = req.query;

    if (!filePath) {
        throw new AppError("File path is required", 400);
    }

    await createFile(filePath);
    res.status(201).json({ message: "File created successfully" });
}

async function deleteFile(req, res, next) {
    const { path: filePath } = req.query;

    if (!filePath) {
        throw new AppError("File path is required", 400);
    }

    await removeFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
}

export {
    postFile, 
    deleteFile 
};