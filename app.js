require("dotenv").config();

const express = require("express");
const databaseConnection = require("./databaseConnection/databaseConnection");
const app = express();
const books = require("./routes/route");

const port = process.env.PORT || 3500;

app.use(express.json());

app.use("/books", books);

const start = async () => {
  try {
    await databaseConnection(process.env.MONGO);
    app.listen(port, () => {
      console.log("Connected to port: " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
