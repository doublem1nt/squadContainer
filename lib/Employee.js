// TODO: Write code to define and export the Employee class

// All employees have a common set of properties
// (1) Name, (2) ID, (3) Email

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function() {
    return "Employee";
};


// // test
// const example = new Employee("Jonathan", 6, "jonathan@gmail.com", "Engineer")
// console.log(example)
// console.log("-------------------")
// console.log(example.getName());
// console.log("-------------------")
// console.log(example.getId());
// console.log("-------------------")
// console.log(example.getEmail());
// console.log("-------------------")
// console.log(example.getRole());
// console.log("-------------------")
// // test end

module.exports = Employee;