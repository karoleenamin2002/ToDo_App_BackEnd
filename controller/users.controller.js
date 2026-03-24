import userModel from "../model/user.model.js";
export const getAllUser = async (req, res) => {
  let users = await userModel.find();
  res.status(200).json({ message: "success", data: users });
};

export const createUser = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    let user = await userModel.create({ username, email, password });
    res.status(200).json({ message: "success", data: user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
