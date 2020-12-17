const Employee = require("./Employee")

// Managers have an Office Number property (unique)

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

// // test
// const example = new Manager("Jonathan", 6, "jonathan@gmail.com", 66)
// console.log(example);
// console.log("-------------------")
// console.log(example.getOfficeNumber());
// console.log("-------------------")
// console.log(example.getRole());
// console.log("-------------------")
// // test end

module.exports = Manager;