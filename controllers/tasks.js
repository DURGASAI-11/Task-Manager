const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const { createCustomeError } = require("../errors/custome-error");
const fs = require("fs");

module.exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: "success", tasks });
});

module.exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

module.exports.getTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(createCustomeError(`No task with id:${id},404`));
  }
  res.status(200).json({ status: "success", task });
});

module.exports.UpdateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomeError(`No task with id:${taskId},404`));
  }
  res.status(200).json({ task });
});
module.exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  // console.log(task);
  if (!task) {
    return next(createCustomeError(`No task with id:${taskId},404`));
  }
  res.status(200).json({ data: null, status: "success" });
});
