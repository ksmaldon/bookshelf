

console.log("test")


const booksContainer = document.querySelector("#book-list")
async function getBooks () {
    
    const response = await fetch ("http://localhost:3000/api/books")
    const { allBooks } = await response.json()
    console.log(allBooks)
    booksContainer.textContent=""
    allBooks.forEach(renderList);
}



function renderList({ title, author, cover }){
    const bookList = document.createElement('ul')
    booksContainer.appendChild(bookList)

    const bookItem= document.createElement('li')

    // const bookTitle = document.createElement('p')
    // bookTitle.textContent = title
    // const bookAuthor = document.createElement('p')
    // bookAuthor.textContent= author
    const bookCover = document.createElement('img')
    bookCover.src=cover
    // const author = document.createElement('h2')
    // author.textContent = document.createElement('h2')
    bookList.appendChild(bookItem)
    // bookItem.appendChild(bookTitle)
    // bookItem.appendChild(bookAuthor)
    bookItem.appendChild(bookCover)
    //console.log(title)
}


function clearList(){
    booksContainer.textContent=""
}

const getButton = document.querySelector('.get-books')
const clearButton = document.querySelector('.clear')

getButton.addEventListener('click', getBooks)
clearButton.addEventListener('click', clearList)

// async function getAPI(){
//     const response = await fetch('http://openlibrary.org/search.json?q=author_name:Stephen King')
//     const data = await response.json()
//     console.log(data.docs[0].isbn[0])
//     const coverImage = data.docs[0].isbn[3]
//     const imageDiv = document.querySelector(".image")
//     const cover = document.createElement('img')
//     cover.src=(`https://covers.openlibrary.org/b/isbn/${coverImage}.jpg`)
//     imageDiv.appendChild(cover)
   
// }

