import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  let { username, email, password } = req.body;
  let user = await userModel.create({
    username,
    email,
    password,
  });

  res.status(201).json({ message: "success", data: user });
};

/*
1- Email , Password
2- Check For Email
3- Check For Password

4- Response

*/

export const login = async (req, res) => {
  //1- Email , Password

  let { email, password } = req.body;

  //2- Check For Email
  let user = await userModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(404).json({ message: "Invalid Email or Password" });
  }
  //   let matched = await bcrypt.compare(password, user.password);
  //   if (!matched) {
  //     return res.status(404).json({ message: "Invalid Password" });
  //   }

  //Token
  res.status(200).json({ message: "success" });
};
