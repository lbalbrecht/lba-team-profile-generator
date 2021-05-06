// Call the Employee class
const Employee = require('./Employee');

// Define the Intern class as an extension of the Employee class
class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.school = internSchool
    };
    getGithub(){
        return this.school
    };
    getRole(){
        return 'Intern'
    }
};

// Export the Intern class for use in other documents
module.exports = Intern