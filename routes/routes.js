const router = require("express").Router();
const Todo = require("../models/todos");

const getAllTodos = async (req, res) => {
    const todo = await Todo.find({});
    res.json({ todo });
}

const createTodos = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(200).json({ todo });
}

const getTodo = async (req, res) => {
    // check for id validation
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
}

const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json(todo);
}

const deleteTodo = async (req, res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id)
    res.status(200).json(todo);
}

router.route("/").get(getAllTodos).post(createTodos);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
