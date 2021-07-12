const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require ('./config/connection');


function startPrompt() {
    inquirer
        .prompt({
            name: 'start',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                "View all departments",
                "View all employees",
                "View all roles",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Quit"
            ]
        })

        .then(response => {
            switch (response.start) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Quit":
                    console.log("Session Ended");
                    db.end();
                    break;    
            }
        });

    function viewDepartments() {
        db.query("SELECT * FROM departments", (err, res) => {
            console.table(res);
            startPrompt();
        })
        };

    function viewEmployees() {
        db.query("SELECT * FROM employee", (err, res) => {
            console.table(res);
            startPrompt();
        });
    };

    function viewRoles() {
            db.query("SELECT * FROM roles", (err, res) => {
                console.table(res);    
                startPrompt();        
            });
    };

    function addDepartment() {
        inquirer
            .prompt([
                {
                    name: "departmentName",
                    type: "input",
                    message: "New Deparment Name: ",
                },
            ])

            .then(function(response) {
                db.query("INSERT INTO departments SET ?", {
                    department_name: response.departmentName,
                },
                    function(err) {
                        if (err) throw err;
                        startPrompt();
                    }       
                );
            });
    };

    function addRole() {
        inquirer
            .prompt([
                {
                    name: "roleName",
                    type: "input",
                    message: "New Role Title:  ",
                },
                {
                    name: "roleSalary",
                    type: "input",
                    message: "New Role Salary: ",
                },
                {
                    name: "roleDepartment",
                    type: "input",
                    message: "New Role Department ID: ",
                }
            ])

            .then(function(response) {
                db.query("INSERT INTO roles SET ?", {
                    title: response.roleName,
                    salary: response.roleSalary,
                    department_id: response.roleDepartment,
                },
                function(err) {
                    if (err) throw err;
                    startPrompt();
                }
            );
        })
    };

    function addEmployee() {
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "Employee first name: "
                },
                {
                    name: "lastName",
                    type: "input",
                    message: "Employee last name: "
                },
                {
                    name: "employeeRole",
                    type: "input",
                    message: "Employee Role ID: "
                },
                {
                    name: "employeeManager",
                    type: "input",
                    message: "Employee Manager ID: "
                }
            ])

            .then(function(response) {
                db.query("INSERT INTO employee SET ?", {
                    first_name: response.firstName,
                    last_name: response.lastName,
                    role_id: response.employeeRole,
                    manager_id: response.employeeManager,
                },
                function(err) {
                    if (err) throw err;
                    startPrompt();
                }
            );
        });
    }
};

startPrompt();