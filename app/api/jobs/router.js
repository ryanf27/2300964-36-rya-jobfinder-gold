const express = require("express");
const { show, find, create, update, remove } = require("./controller");

const router = express.Router();

router.get("/jobs", show);

router.get("/jobs/:id", find);

router.post("/jobs/", create);

router.put("/jobs/:id", update);

router.delete("/jobs/:id", remove);

module.exports = router;
