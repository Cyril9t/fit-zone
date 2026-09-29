import { Router } from "express";
import { prisma } from "../config/db.js";

export const userRoute = Router();

userRoute.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { email: true, name: true },
    });

    if (!users.length) return res.status(404).json({ msg: "no user found" });

    return res
      .status(200)
      .json({ msg: "user retrived successfully", data: users });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

userRoute.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ msg: "name, email and password are required fields" });

    // write the data to db
    const user = await prisma.user.create({
      data: { name, email, password },
    });

    return res.status(201).json({ msg: "user saved successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});
