const UserModel = require('../Models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.getUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      // Add other fields as needed
    };

    const userId = await UserModel.addUser(userData);
    res.status(200).json({ message: 'User added successfully', userId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Duplicate entry. This username or email already exists.' });
    } else {
      next(err);
    }
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      // Add other fields as needed
    };

    const message = await UserModel.updateUser(userId, updatedUserData);
    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const message = await UserModel.deleteUser(userId);
    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
};
