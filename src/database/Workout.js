const dataBase = require("../database/db.json");

const getAllWorkouts = () => {
  return dataBase.workouts;
};

module.exports = { getAllWorkouts };
