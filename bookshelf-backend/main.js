//IMPORTS
import express from 'express'
import morgan from 'morgan';
import booksRouter from '../bookshelf-backend/routes/books.js'

//VARIABLES
const app =express()
const port= 4000

//MIDDLEWARE
app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.json())

//ROUTES
app.use("/", booksRouter)

//MONITOR SERVER
app.listen(port, ()=>{console.log(`Server listening on port ${port}`)});