import User from "./users";
import Addresses from "./addresses";
import Course from "./courses";
import Teacher from "./teachers";


User.hasOne(Addresses);
Addresses.belongsTo(User);


Teacher.hasMany(Course);
Course.belongsTo(Teacher);

User.belongsToMany(Course,{ through: "UserCourse"})
Course.belongsToMany(User,{ through: "UserCourse"})


export { User, Addresses, Teacher, Course};