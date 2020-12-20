const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee")
const employees = []
var count = 0

const questions =
        [{type: 'input',
        name: 'name',
        message: 'What is the name of your employee?'},

        {type: 'input',
        name: 'email',
        message: 'What is your email?'},

        {type: 'input',
        name: 'id',
        message: 'Please enter your ID'}]


const createTeam = function(){
    inquirer.prompt([
        {type: 'list',
        name: 'role',
        message: 'Choose a role to create employee:',
        choices: ['Manager', 'Engineer', 'Intern', 'Create Team']}
    ]).then((data)=>{
        if (data.role === 'Manager'){
        manager();
        }
        if (data.role === 'Engineer'){
        engineer();
        }
        if (data.role === 'Intern'){
        intern();
        }
        if (data.role === 'Create Team'){
        render(employees)
        fs.appendFileSync('./output/team.html', render(employees))
        }
})}

createTeam();

//IF MANAGER IS CHOSEN
const manager = function(){
    inquirer.prompt(questions).then((data)=>{
    inquirer.prompt([{
        type: 'input',
        name:   'officenumber',
        message: 'What is your offce number?'
    }]).then((officenumber)=>{
        const manager = new Manager(data.name, data.id, data.email, officenumber.officenumber);
        employees.push(manager)
        createTeam();
    })
})}

//IF ENGINEER IS CHOSEN
const engineer = function(){
    inquirer.prompt(questions).then((data)=>{
        inquirer.prompt([{
            type: 'input',
            name:   'github',
            message: 'What is your github username?'
        }]).then((github)=>{
            const engingeer = new Engineer(data.name, data.id, data.email, github.github);
            employees.push(engingeer)
            createTeam();
        })
})}

//IF INTERN IS CHOSEN
const intern = function(){
    inquirer.prompt(questions).then((data)=>{
        inquirer.prompt([{
            type: 'input',
            name:   'school',
            message: 'What school do you go to?'
        }]).then((school)=>{
            const intern = new Intern(data.name, data.id, data.email, school.school);
            employees.push(intern)
            createTeam();
        })
})}


// Write code to use inquirer to gather information about the devWelopment team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
