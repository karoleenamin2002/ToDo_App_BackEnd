import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todos.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
