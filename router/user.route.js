import express from "express";
import { getAllUser, createUser } from "../controller/users.controller.js";
import { login, signup } from "../controller/auth.controller.js";
const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);

router.post("/signup", signup);
router.post("/login", login);

export default router;
