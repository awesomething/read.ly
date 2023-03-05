import { useState, useEffect } from 'react'

function Library() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/api/books/')
            const json = await response.json()
            setBooks(json)
        }
        fetchData()
    }, [])

  return (
    <div>
       <h1>Readly</h1>
       <ul>
        { books.map((book, index)=>(
            <li key={index} style={{paddingBottom: '27px'}}>
                <div>{book.name}</div>
                <div>{book.author}</div>
                <div>{book.year_published}</div>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Library