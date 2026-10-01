import express from 'express';

import { postFile, deleteFile} from '../controllers/file.controller.js';

const router = express.Router();

router.route("/").post(postFile).delete(deleteFile);

export default router;