import React, {useEffect, useState} from 'react'
import Book from './Book'

const BookList = () => {
    const fakeBooks = [
    {
        id: 1,
        name: "Lord of the Rings",
        available: true
    },
    {
        id: 2,
        name: "Jurassic Park",
        available: false
    }
    ]

    const [books, setBooks] = useState(fakeBooks)

    useEffect(() => {
        fetch('/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    },[])
    
    return (
        <div>
            {books.map(book => 
                <Book 
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    available={book.available}
                />
            )}
        </div>
    )
}

export default BookList
