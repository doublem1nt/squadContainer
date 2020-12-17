// TODO: Write code to define and export the Employee class

// All employees have a common set of properties
// (1) Name, (2) ID, (3) Email

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
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