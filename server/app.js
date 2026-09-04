import express from 'express';

import fileRouter from './routes/file.route.js';

import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use("/api/file", fileRouter);

app.use(errorHandler);

export default app;