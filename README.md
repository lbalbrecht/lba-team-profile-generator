# lba-team-profile-generator

## Description

This application will allow the user to generate a site for their development team. The site will include each member's contact information as well as employee IDs and other pertinent professional information based on their role. Presently, the application allows the user to input information for managers, engineers, and interns; although, there is the opportunity to expand the application for teams with a broader variety of roles. The application uses the "inquirer" npm package to allow the user to build their team. Additionally, the app uses the "jest" npm package to test the application.

## Usage

The user begins by opening the integrated command terminal in VS Code. First, the user must initiate npm to install the required packages using the following command
```
npm init -y
```
### Running tests

If the user wishes to test the code, they must install jest to the development dependencies using the following command; if there is no plan to test the code, please skip this section
```
npm install --save-dev jest
```
Once jest is installed, the user uses the following command to run the tests
```
npm run test
```
### Installing inquirer

In order for the app to run, the user must install inquirer using the following command
```
npm i inquirer
```

### Running the application

Once the necessary packages have been installed, the user may launch the application from the command terminal using the following command
```
node app.js
```

### Building a team

The user will be prompted to fill out the information for their team's manager. The user will type in the manager's information and click "enter" to move onto the next prompt. Once the user has filled out all of the manager's information, they will be prompted to add an engineer or an intern to their team. The user uses the arrow keys to navigate this prompt. If the user does not wish to add more members to their team, they may choose the "finish" option.

If the user chooses to add another team member (either an engineer or an intern) they will follow a prompt similar to the manager, filling out the required information.

When the team is complete, the user chooses the "finish" option. When the user submits their team with "finish" the information will be rendered on the "team.html" page. Opening this page in the browser will display all the employee information in individual teammate cards.

![Profile Generator Landing Page](./assets/screenshots/screenshot.png?raw=true "A webpage with a red header that reads my team. In the body are three cards with blue headers and various information")

## Contributors

* Leighton Albrecht

[Github Repository](https://github.com/lbalbrecht/lba-team-profile-generator)