const express = require("express");
const app = express();
const portNumber = 8080;

const fileName = "logs.txt";

const userRouter = require("./routes/user");

const mongoDb = require("./connection");

const { logReqRes } = require("./middlewares/index");

app.use(express.urlencoded({ extened: false }));

mongoDb
  .connectMongoDb()
  .then(() => console.log("MongoDb connected successfully"))
  .catch((err) => console.log(err));

//middleware
app.use(logReqRes(fileName));

//users router --> creatting routing from index ---> to routes
app.use("/users", userRouter);

app.listen(portNumber, () =>
  console.log(`server started on port number ${portNumber}`)
);


