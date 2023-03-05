const books = require('express').Router()
const db = require('../models')
const { Book } = db

//.get endpoint
books.get('/', async (req,res)=>{
    try{
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    }catch(err){
        res.status(500).send("Something went wrong!")
        console.log(err)
    }
})

module.exports = books