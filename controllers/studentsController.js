// const { SkillCourse, User } = require('../models');

// // Get All Available Skills
// exports.getAllSkills = async (req, res) => {
//   try {
//     const skills = await SkillCourse.findAll();
//     res.status(200).json(skills);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch skills' });
//   }
// };

// // Get Mentors List
// exports.getMentors = async (req, res) => {
//   try {
//     const mentors = await User.findAll({ where: { role: 'mentor', isApproved: true } });
//     res.status(200).json(mentors);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch mentors' });
//   }
// };


// // Enroll in a Skill Course
// exports.enrollCourse = async (req, res) => {
//   try {
//     const { courseId } = req.body;
//     const course = await SkillCourse.findByPk(courseId);

//     if (!course) return res.status(404).json({ error: 'Course not found' });

//     // Logic to enroll the user in the course
//     res.status(200).json({ message: 'Successfully enrolled in the course' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to enroll in course' });
//   }
// };
