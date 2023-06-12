import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let trimmedEmail = email.trim();
    let trimmedPassword = password.trim();

    if (trimmedPassword && trimmedEmail) {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: passwordHash,
      });

      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
    } else {
      res.status(403).json({ error: "Empty Fields" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGIN USER */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let trimmedPassword = password.trim();
    let trimmedEmail = email.trim();
    if (trimmedEmail && trimmedPassword) {
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid credentials. " });

      const token = jwt.sign({ token: user.email }, process.env.JWT_SECRET);

      delete user.password;

      return res.status(200).json({ user, token });
    } else {
      res.status(403).json({ error: "Empty Fields" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
