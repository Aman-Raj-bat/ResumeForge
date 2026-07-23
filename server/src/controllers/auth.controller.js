const authService = require('../services/auth.service');
const { successResponse } = require('../utils/response');

const register = async (req, res, next) => {
  try {
    const data = await authService.registerUser(req.body);
    return successResponse(res, 201, 'User registered successfully', data);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await authService.loginUser(email, password);
    return successResponse(res, 200, 'User logged in successfully', data);
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await authService.getUserProfile(req.user.id);
    return successResponse(res, 200, 'User profile fetched successfully', { user });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    // In a stateless JWT setup where we use Authorization header,
    // logout is mostly handled client-side by deleting the token.
    // If we used HttpOnly cookies, we would clear the cookie here.
    // For now, just return a success message.
    return successResponse(res, 200, 'User logged out successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe,
  logout,
};
