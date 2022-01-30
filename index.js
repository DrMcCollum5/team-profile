const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");

var allEmployees = [];

// start with a function asking for manager info
const addManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager?"
    //   validate: (answer) => {
    //     if (answer) {
    //       return true;
    //     }
    //     return "Please enter the manager's name!";
    //   },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's ID."
    //   validate: (nameInput) => {
    //     if (nameInput) {
    //       console.log("Please enter the manager's ID!");
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email."
    //   validate: (nameInput) => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log("Please enter an email!");
    //       return false;
    //     }
    //   },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number"
    //   validate: (nameInput) => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log("Please enter an office number!");
    //     }
    //     return false;
    //   },
    },
  ]).then((answer) => {
        console.log('Questions finsihed')
        const manager = new Manager(
            answer.name,
            answer.id,
            answer.email,
            answer.officeNumber
            );
       


  allEmployees.push(manager)
    

    allEmployees.push(manager);
    console.log(manager);
    
})
};

const addEmployee = () => {
  console.log("");

  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        allEmployees.push(employee);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        allEmployees.push(employee);
        console.log(employee);
      }

      if (confirmAddEmployee) {
        return addEmployee();
      } else {
        return writeFile();
      }
    });
};

function buildHTML() {}
const writeFile = () => {
  console.log("This is where I would build html");

  fs.writeFile();
};

addManager();
