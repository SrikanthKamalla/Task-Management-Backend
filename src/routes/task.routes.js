import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const router = express.Router();

router.post("/", isLoggedIn, createTask);
router.get("/", isLoggedIn, getTasks);
router.get("/:id", isLoggedIn, getTaskById);
router.put("/:id", isLoggedIn, updateTask);
router.delete("/:id", isLoggedIn, deleteTask);

export default router;
