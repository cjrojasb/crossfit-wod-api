const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();

  res.send({
    status: "OK",
    data: allWorkouts,
  });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send("Get one workout");
};

const createWorkout = (req, res) => {
  const createdWorkout = workoutService.createWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
