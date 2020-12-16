// TODO: Write code to define and export the Engineer class.  
// HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// Engineers have a Github Username property (unique)

function Engineer (name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
};

Engineer.prototype.getRole = function() {
    return "Engineer";
};

Engineer.prototype.getGithub = function() {
    return this.github;
};

// // test
// const example = new Engineer("Jonathan", 6, "jonathan@gmail.com", "doublem1nt")
// console.log(example);
// console.log("-------------------")
// console.log(example.getGithub());
// console.log("-------------------")
// console.log(example.getRole());
// console.log("-------------------")
// // test end

module.exports = Engineer;