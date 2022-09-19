const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Query = require('./lib/Query');
const Role = require('./lib/Role');


const db = mysql.createConnection(
  {
    host: 'localHost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log('Successfully connected to the database!')
);

async function promptUserForAction() {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'View employees by manager',
      'View employees by department',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee\'s role',
      'Update an employee\'s manager'
    ]
  });
};

// prompt user to select a query on startup
function initializeApp() {
  promptUserForAction();
};

initializeApp();