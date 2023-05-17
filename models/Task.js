const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The task must have some name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 letters"],
    minlength: [2, "name can not be less than 2 letters"],
    unique: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
