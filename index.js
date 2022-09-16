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