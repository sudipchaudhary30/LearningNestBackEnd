// const { Admin, SkillCourse, User } = require('../models');

// // Get all users (For Admin Panel)
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role'] });
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// };

// // Approve a Mentor
// exports.approveMentor = async (req, res) => {
//   try {
//     const { mentorId } = req.params;
//     const mentor = await User.findByPk(mentorId);

//     if (!mentor || mentor.role !== 'mentor') {
//       return res.status(404).json({ error: 'Mentor not found' });
//     }

//     mentor.isApproved = true;
//     await mentor.save();
//     res.status(200).json({ message: 'Mentor approved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to approve mentor' });
//   }
// };

// // Add a new Skill Course
// exports.addSkillCourse = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const newCourse = await SkillCourse.create({ name, description });
//     res.status(201).json({ message: 'Skill course added successfully', newCourse });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add skill course' });
//   }
// };

// // Delete a User (Admin only)
// exports.deleteUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findByPk(userId);

//     if (!user) return res.status(404).json({ error: 'User not found' });

//     await user.destroy();
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// };
