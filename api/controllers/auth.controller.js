import User from '../models/user.models.js';

export const signup = async(req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({username, email, password});
  await newUser.save();
  res.status(201).json({message: "User created successfully"});
} 