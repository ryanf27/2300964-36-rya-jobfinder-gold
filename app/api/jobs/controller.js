const db = require("../../db/db");

const show = async (req, res) => {
  try {
    const result = await db.select("*").from("jobs");

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

const find = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db("jobs").select("*").where("id", id);

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

const create = async (req, res) => {
  try {
    const { title, description, type, salary, status } = req.body;
    await db("jobs").insert({ title, description, type, salary, status });

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type, salary, status } = req.body;

    await db("jobs")
      .where("id", id)
      .update({ title, description, type, salary, status });

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.error(err);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await db("jobs").where("id", id).delete().returning("id");

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  show,
  find,
  create,
  update,
  remove,
};
