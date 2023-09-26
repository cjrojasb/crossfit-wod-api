const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:id", workoutController.getOneWorkout);

router.post("/", workoutController.createWorkout);

router.patch("/:id", workoutController.updateOneWorkout);

router.get("/:id", workoutController.deleteOneWorkout);

module.exports = router;
