import React, {useEffect, useState} from 'react'
import Book from './Book'

const BookList = () => {
    const fakeBooks = [
    {
        name: "Lord of the Rings"
    },
    {
        name: "Jurassic Park"
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
                    name={book.name}
                />
            )}
        </div>
    )
}

export default BookList
