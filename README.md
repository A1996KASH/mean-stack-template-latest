# Zeblok's Computational Application Backend

This Application provides the REST API's for RocketSkills
## Installation of Node Packages

Use the package manager [npm](http://www.npmjs.com) to install dependencies.

```bash
npm install
```

## Running the Development server
```bash
npm run start-dev
```
### This Command will run the application in development mode and will connect to MongoDb URL defined in .env files as MONGO_TEST.

## Running as a Production server
``` bash
npm start 
```
### This Command will run the application in Production mode and will connect to MongoDb URL defined in .env files as MONGO_URI.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
### Environment Variables
```
PORT=3000
```
### ENV varialbles for CEWIT are in .env.prod and for AWS are in .env.aws. copy variables from these files to .env as per the deployment
## License
[RocketSkills](https://rocketskills.in/)