import express from "express";
import todoRouter from "./router/todos.route.js";
import userRouter from "./router/user.route.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/TodoAppMEARN")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());

app.use(express.json());
app.use(express.static("static"));

app.use("/todos", todoRouter);
app.use("/users", userRouter);
//Wildcard // Not found Middleware

app.use(/.*/, (req, res) => {
  res.status(404).json({ message: `${req.baseUrl} Route Not Found` });
});

app.listen(3000, () => {
  console.log("Server Started");
});

//CORS ===> Cross Origin Resourse Sharing

/*Bcrypt

.salt
123456
fasfasfadgsgwgfwrvw.ashfbaycybey


123456
afasdcnuncweqyf.afmainecbwecwe
hash.random

*/
