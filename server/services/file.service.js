import fs from 'node:fs/promises';

async function createFile(filePath) {
    try {
        const fileHandle = await fs.open(filePath, "wx");
        await fileHandle.close();
        console.log(`[FILESYSTEM] Created file at: ${filePath}`);
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log(`[ERROR] File already exists at: ${filePath}`);
        } else {
            console.log(`[ERROR] Couldn't create file at: ${filePath}`);
        }
    }
}
