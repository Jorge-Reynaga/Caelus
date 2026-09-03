import express from 'express';

import { deleteFile } from '../controllers/file.controller.js';

const router = express.Router();

router.route("/").delete(deleteFile);

export default router;