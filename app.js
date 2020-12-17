const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// empty Array to push Employee objects into
const employeeArray = [];

// array of questions for user, common properties for all employees, lines 19 to 33
const questions = [
    {
        type: "input",
        message: "Good Day, please provide the employee's Name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Thank you, please provide the employee's Email: ",
        name: "email",
    },
    {
        type: "number",
        message: "Thank you, please provide the employee's ID Number: ",
        name: "id",
    },
    // Type of Employee determines next questions asked, lines 35 - 43
    {
        type: "list",
        message: "Thank you, please provide the employee's Role: ",
        choices: [
            "Manager",
            "Engineer",
            "Intern"],
        name: "role",
    },
    // If Employee is "Manager", Lines 45-50 are asked
    {
        type: "number",
        message: "Thank you, please provide the manager's office number: ",
        name: "officeNumber",
        when: (userData) => userData.role === "Manager",
    },
    // If Employee is "Engineer", Lines 52-57 are asked
    {
        type: "input",
        message: "Thank you, please provide the engineer's Github Username: ",
        name: "github",
        when: (userData) => userData.role === "Engineer",
    },
    // If Employee is "Intern", Lines 59-64 are asked
    {
        type: "input",
        message: "Thank you, please provide the intern's School: ",
        name: "school",
        when: (userData) => userData.role === "Intern",
    },
    // Last Question to determine if additional employee iterations are to be included 
    {
        type: "confirm",
        message: "Thank you for the input, would you like to set up another Employee?",
        name: "add_more",
    }
];

// Initialization Function definition to create new Employee objects
function buildNewEmployee() {
    inquirer
        .prompt(questions)
        .then((userData) => {
            // Depending on Employee type, different data is stored in subclass Employee objects
            // All newly created subclass employee objects are pushed into EmployeeArray 
            // All subclasses have same first three properties (1) name (2) ID & (3) email
            switch (userData.role){

                // Managers have unique property of "Office Number"
                case "Manager":
                    const newManager = new Manager(userData.name, userData.id, userData.email, userData.officeNumber)
                    // console.log(newManager) // uncomment to see each new Manager object created, in console!
                    employeeArray.push(newManager);
                    checkForMore(userData.add_more);
                    return true;

                // Engineers have unique property of "Github Username"
                case "Engineer":
                    const newEngineer = new Engineer(userData.name, userData.id, userData.email, userData.github)
                    // console.log(newEngineer) // uncomment to see each new Manager object created, in console!
                    employeeArray.push(newEngineer);
                    checkForMore(userData.add_more);
                    return true; 

                // Managers have unique property of "Office Number"
                case "Intern":
                    const newIntern = new Intern(userData.name, userData.id, userData.email, userData.school)
                    // console.log(newIntern) // uncomment to see each new Manager object created, in console!
                    employeeArray.push(newIntern);
                    checkForMore(userData.add_more);
                    return true;

                default:
                    return false;
            }
        })
}

// Function to determine if user wishes to continue adding new employees into Employee Array
// If not, function will activate next function to generate HTML
function checkForMore(more) {
    if (more){
        // re-runs build function to create another employee object
        buildNewEmployee();
    } else {
        // Ends new employee object creation and moves application over to Html  & file creation
        htmlGenerator();
    }
}

// Function uses Employee Array to customize data in htmlRenderer.js file and then writes the file into Output directory.
function htmlGenerator() {

    // If output directory doesn't exist, following lines dynamically create it and then write "team.html" into the new location
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
        const teamDiagram = render(employeeArray)
        fs.writeFileSync(outputPath, teamDiagram)
        console.log("\nThank you, please see HTML file for your team details\n");
        return true;

    // If output directory does exist, following lines will dynamically create "team.html" into folder
    } else {
        const teamDiagram = render(employeeArray)
        fs.writeFileSync(outputPath, teamDiagram)
        console.log("\nThank you, please see HTML file for your team details\n");
        return true;
    }
}

// Calling Initialization function to begin application
buildNewEmployee();
