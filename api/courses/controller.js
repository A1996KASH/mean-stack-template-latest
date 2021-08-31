const asyncHandler = require('../../middleware/async')
const Course = require('./models/course')
// @desc     Get User
// @route    GET /api/v1/users/
// @access   Private
exports.getCourses = asyncHandler(async (req, res, next) => {
  const users = await Course.findAll()
  res.status(200).json({ status: 'success', data: users })
})
