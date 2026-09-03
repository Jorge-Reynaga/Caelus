import { createFile, removeFile } from "../services/file.service.js";

async function deleteFile(req, res) {
    const { path: filePath } = req.query;

    if (!filePath) {
        res.status(400).json({ message: "File path is required" });
        return;
    }

    await removeFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
}

export { deleteFile };