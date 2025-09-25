import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import sendResponse from "../utils/response.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    const newUser = await user.save();

    const token = jwt.sign(
      {
        email: newUser.email,
        name: newUser.name,
        id: newUser._id,
        role: newUser.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    const data = { user: newUser, token };
    return sendResponse(res, "SignUp successfully", 201, data);
  } catch (error) {
    return sendResponse(res, error.message, 500, null);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, "User not found", 404, null);
    }

    const isMatch = await bcrypt.compare(password, user.password ?? "");
    if (!isMatch) {
      return sendResponse(res, "Email/password do not match", 401, null);
    }

    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    const data = { user, token };
    return sendResponse(res, "User logged in successfully", 200, data);
  } catch (error) {
    return sendResponse(res, error.message, 500, null);
  }
};

export const loggedInUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req?.user?.id);
    return sendResponse(res, "User details fetched successfully", 200, user);
  } catch (error) {
    return sendResponse(res, error.message, 500, null);
  }
};
