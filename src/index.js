const express = require("express");
const morgan = require("morgan");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const PORT = process.env.PORT || 8000;
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routing
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
