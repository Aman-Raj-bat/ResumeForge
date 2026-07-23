const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt');

const registerUser = async (userData) => {
  const { fullName, email, password } = userData;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error('User with this email already exists');
    error.statusCode = 400;
    throw error;
  }

  // Create user
  const user = await User.create({
    fullName,
    email,
    password,
  });

  if (user) {
    return {
      user,
      token: generateToken(user._id),
    };
  } else {
    const error = new Error('Invalid user data');
    error.statusCode = 400;
    throw error;
  }
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return {
      user,
      token: generateToken(user._id),
    };
  } else {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }
};

const getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
