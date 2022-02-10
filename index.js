const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
const inquirer = require("inquirer");
const path = require ("path");
const fs = require("fs");
const generateHtml = require ("./src/generatehtml");
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'allEmployees.html');

var allEmployees = [];

// start with a function asking for manager info
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager?",
        
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
        
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        
      },
    ])
    .then((answer) => {
      console.log("Questions finsihed");
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );

      allEmployees.push(manager);

      //    allEmployees.push(manager);
      console.log(manager);
      directory();
    });
};

function directory() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "directoryChoice",
        message: "What employee would you like to add next?",
        choices: ["engineer", "intern", "im done adding employees"],
      },
    ])
    .then((answers) => {
      switch (answers.directoryChoice) {
        case "engineer":
          addEngineer();
          break;
        case "intern":
          addIntern();
          break;
        default:
          buildHTML();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email.",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please enter the engineer's gitHub.",
      },
    ])
    .then((answer) => {
      console.log("Questions finsihed");
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.gitHub
      );

      allEmployees.push(engineer);

      console.log(engineer);
      directory();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the intern?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email.",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
      },
    ])
    .then((answer) => {
      console.log("Questions finsihed");
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );

      allEmployees.push(intern);

      console.log(intern);
      directory();
    });
}

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

function buildHTML() {
  if (!fs.existsSync(DIST_DIR)){
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, generateHtml(allEmployees), 'utf-8');

}
const writeFile = () => {
  console.log("This is where I would build html");

  fs.writeFile();
};

addManager();
