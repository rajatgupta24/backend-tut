const router = require("express").Router();

const getAllTodos = (req, res) => {
    res.json({ "message": "Success" });
}

const createTodos = (req, res) => {
    res.json({ "message": "Success" });
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
