const router = require("express").Router();
const Todo = require("../models/todos");

const getAllTodos = async (req, res) => {
    const result = await Todo.find({});
    res.json({ result });
}

const createTodos = async (req, res) => {
    const task = await Todo.create(req.body)
    res.status(200).json({ task });
}

const getTodo = (req, res) => {
    res.json({ "message": "Success" });
}

const updateTodo = (req, res) => {
    res.json({ "message": "Success" });
}

const deleteTodo = (req, res) => {
    res.json({ "message": "Success" });
}

router.route("/").get(getAllTodos).post(createTodos);
router.route("/:id").get(getTodo).post(updateTodo).delete(deleteTodo);

module.exports = router;
