// Call the Employee class
const Employee = require('./Employee');

// Define the Intern class as an extension of the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    };
    getOfficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return 'Manager'
    }
};

// Export the Manager class for use in other documents
module.exports = Manager