import 'dotenv/config';
import express from "express";
import sequelize from './db.js';
import models from './models/models.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).json({ message: 'Я работаю!!!' });
});

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