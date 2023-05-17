const express = require("express");
const viewController = require("../controllers/viewController");
const tasksController = require("../controllers/tasks");
const router = express.Router();

router.route("/:name").get(viewController.getSpecificTask);
router.route("/").get(viewController.createNew);

module.exports = router;
