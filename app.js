const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const viewRouter = require("./routes/viewRoute");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFount = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
//middleware

app.use(express.static("./public"));
app.use(express.json());
app.set("view engine", "ejs");
//routes
app.get("/hello", (req, res) => {
  res.send("Task manager APP");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/specificTask", viewRouter);
app.use("/api/v1/Alltasks", viewRouter);
app.use(notFount);
app.use(errorHandlerMiddleware);
//app.get('/api/v1/tasks')          --- get all the tasks
//app.post('api/v1/tasks')          --- create a new task
//app.post('api/v1/tasks/:id')      --- get single task
//app.patch('api/v1/tasks/:id')     --- update task
//app.delete('/api/v1/tasks/:id')   --- delete task

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening to the port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
