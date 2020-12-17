// TODO: Write code to define and export the Engineer class.  
// HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// Engineers have a Github Username property (unique)

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
};

// Engineer.prototype.getRole = function() {
//     return "Engineer";
// };

// Engineer.prototype.getGithub = function() {
//     return this.github;
// };

// test
// const example = new Engineer("Jonathan", 6, "jonathan@gmail.com", "doublem1nt")
// console.log(example);
// console.log("-------------------");
// console.log(example.getGithub());
// console.log("-------------------");
// console.log(example.getRole());
// console.log("-------------------");
// test end

module.exports = Engineer;