const express = require("express");
const PORT = 3001;
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv/config");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// parses the requests passed through in the body
app.use(bodyParser.json());

//import routes
const thoughtRoute = require("./routes/thought");
const userRoute = require("./routes/user");
//app.use runs middleware, it can be any function connected to a route
app.use("/thought", thoughtRoute);
app.use("/user", userRoute);

//connection string to local instance of MondoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

//initialize new instance of MongoClient
const client = new MongoClient(connectionStringURI);

//declare variable to hold connection
let db;

//create new variable to hold database name
const dbName = "social_network_db";

//use connect method to connect to the mongo server
client
  .connect()
  .then(() => {
    console.log(`Connected to ${dbName}`);
    //use client.db() constructor to add new db instance
    db = client.db(dbName);

    //start up express server
    app.listen(PORT, () => {
      console.log("Now listening...");
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });
//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("We are on home");
});
