import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      validate: {
        validator: function (value) {
          return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value);
        },
        message: ({ value }) => `${value} Invalid Email`,
      },
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//Middleware
/*
{
 username:"Karim",
 email:"karim@gmail.com",
 password:"123456"
}
*/
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// userSchema.post("fin")

const userModel = mongoose.model("User", userSchema);

export default userModel;
