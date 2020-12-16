// TODO: Write code to define and export the Intern class.  
// HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// Interns have a School property (unique)

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
};

Intern.prototype.getRole = function() {
    return "Intern";
};

Intern.prototype.getSchool = function() {
    return this.school;
}

// test
const example = new Intern("Jonathan", 6, "jonathan@gmail.com", "UCLA")
console.log(example);
console.log("-------------------")
console.log(example.getSchool());
console.log("-------------------")
console.log(example.getRole());
console.log("-------------------")
// test end

module.exports = Intern;