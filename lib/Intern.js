// TODO: Write code to define and export the Intern class.  
// HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// Interns have a School property (unique)

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
};

// // test
// const example = new Intern("Jonathan", 6, "jonathan@gmail.com", "UCLA")
// console.log(example);
// console.log("-------------------")
// console.log(example.getSchool());
// console.log("-------------------")
// console.log(example.getRole());
// console.log("-------------------")
// // test end

module.exports = Intern;