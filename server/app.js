import express from 'express';

import fileRouter from './routes/file.route.js';

import { httpLogger } from './middleware/http.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(httpLogger);

app.use("/api/file", fileRouter);

app.use(errorHandler);

export default app;