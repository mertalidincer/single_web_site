import { Request, Response } from 'express';
import User from '../models/user';

export const postCreateUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Kullanıcı olusturulamadi' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};