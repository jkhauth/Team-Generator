// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName = function (){
        return this.name
    }
    getRole = function (){
        return this.role
    }
    getEmail = function(){
        return this.email
    }
    getId = function (){
        return this.id
    }
    getGithub = function(){
        return this.github
    }
    getOfficeNumber = function (){
        return this.officeNumber
    }
    getSchool = function(){
        return this.school
    }
}
module.exports = Employee