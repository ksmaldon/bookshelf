import { useState,useEffect } from "react"


export default function BookList (){
    const [backendData, setBackendData] = useState([{}])
  
   useEffect(()=> {
    async function getBooks(){
        const response = await fetch("/api/books")
        const data = await response.json()
        setBackendData(data.allBooks.books)
        console.log(data.allBooks)
    }
   getBooks()

   },[])

   return <div>
    {backendData.map((book, id)=>{
        console.log(book.cover)
        return <img key = {id} src = {book.cover} alt=""></img>
    })}

   </div>


}

