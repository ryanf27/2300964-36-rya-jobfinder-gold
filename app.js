const express = require("express");
const port = 3000;
const app = express();

// import router
const jobRoutes = require("./app/api/jobs/router");

// middleware
app.use(express.json());
app.use(express.static("public"));

// router
app.use("/api", jobRoutes);

app.listen(port, () => {
  console.log(`Server run port ${port}`);
});
