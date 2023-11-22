const { Router } = require("express");
const { getTodos, createTodo, updateTodo, updateTodoStatus, deleteTodo } = require("../controller/task");
const router = Router();
const { authMiddleware } = require("../middleware/index");

// Route to get all todos (requires authentication)
router.get("/", authMiddleware, getTodos);

// Route to create a new todo (requires authentication)
router.post("/", authMiddleware, createTodo);

router.patch("/todo/:todoId", authMiddleware, updateTodo);

router.patch("/status/:todoId", authMiddleware, updateTodoStatus);

router.delete("/:todoId", authMiddleware, deleteTodo);

module.exports = router;
