const Manager = require("./Lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

var allEmployees = [];



// start with a function asking for manager info

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager?",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter the manager's name!");
//             return false;
//           }
//         },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
//         validate: (nameInput) => {
//           if (nameInput) {
//             console.log("Please enter the manager's ID!");
//             return false;
//           } else {
//             return true;
//           }
//         },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter an email!");
//             return false;
//           }
//         },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter an office number!");
//           }
//           return false;
//         },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      allEmployees.push(manager);
      console.log(manager);
      addEmployee ();
    });
};

addManager();