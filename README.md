# NASA API integration

<br />`Stundet Number: IT21479250`
<br />`Stundet Name: Gunathilaka I.U.`

This project for AF (Application Framework) module offred bt SLIIT (Y3S2). (Assignement 02)

### SETUP INSTRUCTION

_Please use the following node and npm versions to the the application_
<br />node version: v18.17.0
<br />npm version: 9.6.7

_Application installation and run_

1. navigate to the root directory and give `npm run install-all` (this will install all the dependencies that needed in root, client and server directories)
2. place the `.env` file in the server directory (copy the following environmental variables and paste it there.)
   <br />SERVER_PORT = your server port here
   <br />MONGO_URL = your mongodb url here
   <br />JWT_SECRET = your jwt secret here
   <br />(Because have to delpoy the project in the host, will be added this file as well.)
3. To run the application, navigate to the main directory and giver `npm start` (the client and server run on defualt 3000 and 5000 ports by default)

### DEPLOYE INSTRUCTION

1. Get a repository clone.
2. run `docker compose up` command in the root directory.

- Currently, the project runs on the following IP. Please note that this is only until 2024-05-21.
  `http://165.227.77.163:3000/`

### FOR TESTING

- Just run the `npm run test` in the root directory.

### DOCUMENTATION

- Please find the Intro Documentation.docx file to aware about the chosen APIs, any challenges faced, and how they were resolved.

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)
