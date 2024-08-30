import bcryptjs from "bcryptjs";

import { sendEmailVerification } from "../utils/send-email-verification.js";
import { generateTokenCookie } from "../utils/generate-token-cookie.js";
import User from "../models/user.model.js";

const AuthController = {
  signUp: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      if (!username || !email || !password) {
        throw new Error("Some of the fields are missing!");
      }

      const userAlreadyExists = await User.findOne({ email });

      if (userAlreadyExists) {
        throw new Error("User already exists!");
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const verificationToken = Math.floor(
        1000 + Math.random() * 9000
      ).toString();

      const user = new User({
        username,
        email,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
      });

      await user.save();

      await generateTokenCookie(res, user._id);

      await sendEmailVerification(user.email, verificationToken);

      return res.status(201).json({
        message: "User created successfully",
        user: {
          ...user._doc,
          password: undefined,
        },
      });
    } catch (e) {
      res.status(409).json({ message: e.message });
    }
  },
  signIn: async (_, res) => {
    res.send("Sign in route");
  },
  signOut: async (_, res) => {
    res.send("Sign out route");
  },
};

export default AuthController;
