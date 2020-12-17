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