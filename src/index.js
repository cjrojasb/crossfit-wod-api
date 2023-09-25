const express = require("express");
const morgan = require("morgan");
const v1Router = require("./v1/routes");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan("dev"));

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
