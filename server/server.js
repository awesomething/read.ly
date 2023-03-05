//dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Controllrs
const booksController = require('./controllers/books_controller')
app.use('/api/books', booksController)

app.listen(8080, () => {
    console.log('Server started: 8080')
})