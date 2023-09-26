const workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createWorkout = () => {
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
