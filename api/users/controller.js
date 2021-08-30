const asyncHandler = require('../../middleware/async')
const User = require('./model')
// @desc     Get User
// @route    GET /api/v1/users/
// @access   Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json({ status: 'success', data: 'Welcome to RocketSkills' })
})
