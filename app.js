const express = require("express");

const app = express();

const port = 8080;

const router = require("./routes/routes");

const configureMiddlewares = require("./middlewares/middlewares");


const databaseConnection = require("./connection");

const url = "mongodb://127.0.0.1:27017/student"

databaseConnection(url).then(()=>{
  console.log("connection successful with database")
})



configureMiddlewares(app)


app.use("/lms",router);

// app.get("/", (req, res) => {
//   res.send("Server working!");
// });


app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})
