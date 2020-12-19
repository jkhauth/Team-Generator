// TODO: Write code to define and export the Employee class
class employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
        this.role = 'employee'
    }
    getName = function (){
        return this.name
    }
    getRole = function (){
        return this.role
    }
    getId = function (){
        return this.id
    }
    getofficeNumber = function (){
        return this.officenumber
    }
    getGithub = function(){
        return this.github
    }
    getSchool = function(){
        return this.school
    }
}
module.exports = employee