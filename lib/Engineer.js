// Call the Employee class
const Employee = require('./Employee');

// Define the Engineer class as an extension of the Employee class
class Engineer extends Employee {
    constructor(name, id, email, engineerGithub) {
        super(name, id, email);
        this.github = engineerGithub
    };
    getGithub(){
        return this.github
    };
    getRole(){
        return 'Engineer'
    }
};

// Export the Engineer class for use in other documents
module.exports = Engineer