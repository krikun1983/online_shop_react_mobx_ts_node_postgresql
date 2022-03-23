import 'dotenv/config';
import express from "express";
import sequelize from './db.js';
import models from './models/models.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from './routes/index.js';
import errorHandleMiddleware from './middlewares/ErrorHandleMiddleware.js';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandleMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();