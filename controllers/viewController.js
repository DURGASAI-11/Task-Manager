const Task = require("../models/Task");

module.exports.getSpecificTask = async (req, res) => {
  if (req.params.name) {
    const Tname = req.params.name;
    const task = await Task.findOne({ name: Tname });
    return res.status(200).render("specificTask", { task });
  }
};
module.exports.createNew = async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).render("AllTasks", { tasks });
};
