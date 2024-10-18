const express=require('express');
const app=express();
const cors = require("cors");
const helmet = require('helmet');
const sequelize=require('../backend/db');
const accountRouter=require('../backend/routes/accRoute')
const Acc=require('../backend/models/Acc.model')
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(helmet());

const port = 3020;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await Acc.sync(); //Create the accounts table
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectDB();
app.use("/accounts", accountRouter);