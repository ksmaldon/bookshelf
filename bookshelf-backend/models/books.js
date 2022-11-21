import fs from "node:fs/promises"
import path from 'node:path'

const filePath = path.resolve("books.json")


export async function getBooks() {
    let booksJSON = await fs.readFile(filePath)
    let allBooks = await JSON.parse(booksJSON)
    return {allBooks}
}