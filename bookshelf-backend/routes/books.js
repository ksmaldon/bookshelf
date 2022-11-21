import express from 'express';
const router = express.Router();

import {
    getBooks
} from "../models/books.js"



router.get("/api/books", async (req,res)=>{
    const allBooks = await getBooks()
    return res.json(allBooks)
})

export default router