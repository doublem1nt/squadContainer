// TODO: Write code to define and export the Manager class. 
// HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// Managers have an Office Number property (unique)

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
};

Manager.prototype.getRole = function() {
    return "Manager";
};

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

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