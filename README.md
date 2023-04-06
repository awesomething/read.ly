# read.ly

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## How to use sequelize and supabase

Once your basic react app and server are running, in the project directory and terminal, you can run:

### `npm i -g sequelize-cli`

Next run
### `sequelize init`

Builds our sql boilerplate code to the `config, migrations, models and seeders` folder.\


### `Create a supabase account`


To store your data in supabase, you need to create an account and a new project
Go to [https://supabase.com](https://supabase.com/) to view it in your browser and click on Start a Project or New project.

**Note: Remember to save your `Database Password` in a file, you can't go back!**

## Config.json to config.js

The purpose for changing the config.json to config.js is to use our env file for our secrets and use process.env inside the config.js file.
Next, wrap the object and add a module.exports at the top like so module.exports = { ... }:
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
}


### Under models folder

Go to index.js, change config.json to config.js like this: 
const config = require(__dirname + '/../config/config.js')[env];

### Get your env values from supabase

Head to your settings here: [https://supabase.com](https://supabase.com/) and click on Database or Databse settings and copy these values
USERNAME=postgres
PASSWORD=++++++++++++
NAME=postgres
HOST=
PORT=

### In your .env file, add the following:

DB_USERNAME=postgres
DB_PASSWORD=++++++++++++
DB_NAME=postgres
DB_HOST=---------------------.supabase.co
PORT=8000


### Generate models

This let us utilize the sqlized cli to help us generate models and creates a NEW file under your models folder
In your terminal, you can run: `sequelize model:generate --name <NAMEOFTABLE> --attributes id:interger, name:string, year:smallint`
THE ABOVE IS FOR EXAMPLE PURPOSES, IT DEPENDS ON YOUR ATTRIBUTES. YOU NEED TO EDIT YOUR NEW FILE ACCORDINGLY (see models/book.js AND migrations folder)


### Migration

Run `cd ..` in your terminal moved to your root path: then run `sequelize db:migrate`
You should see create...: migrate in your terminal

### `seed` your table

Check supabase to confirm your table was created. Then run `sequelize seed:generate <NAMEOFTABLE>`
YOU NEED TO EDIT YOUR NEW SEEDERS FILE ACCORDINGLY (see seeders/1236.....js in the seeders folder)

### `seed all` your table

In your terminal, run : `sequelize db:seed:all`
