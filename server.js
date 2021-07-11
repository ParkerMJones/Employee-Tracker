const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { db, connection } = require ('./config/connection');


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
                "Update employee role",
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
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Quit":
                    connection.end();
                    break;    
            }
        });

    function viewDepartments() {
        let query = "SELECT * FROM departments";
        connection.query(query, function(res) {
            console.table(res);
            startPrompt();
        });
    };

    function viewEmployees() {
        let query = "SELECT e.id, e.first_name, e.last_name, roles.title, departments.department_name AS department, roles.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN roles ON e.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id ORDER BY id ASC"; 
        connection.query(query, function(res) {
            console.table(res);
            startPrompt();
        });
    };

    function viewRoles() {
        let query = `SELECT roles.id, roles.title, departments.department_name AS department, roles.salary
                    FROM roles
                    INNER JOIN departments ON roles.department_id = departments.id`;

            connection.query(query, function(res) {
                console.table(res);    
                startPrompt();        
            });
    };

    function addDepartment() {
        inquirer
            .prompt([
                {
                    name: "departmentId",
                    type: "input",
                    message: "New Department ID: ",
                },
                {
                    name: "departmentName",
                    type: "input",
                    message: "New Deparment Name: ",
                },
            ])

            .then(function(response) {
                connection.query("INSERT INTO departments SET ?", {
                    id: response.departmentId,
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
                    name: "roleID",
                    type: "input",
                    message: "New Role ID: ",
                },
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
                connection.query("INSERT INTO roles SET ?", {
                    id: response.roleID,
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
                    name: "employeeID",
                    type: "input",
                    message: "New Employee ID: "
                },
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
                connection.query("INSERT INTO employee SET ?", {
                    id: response.employeeID,
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
     