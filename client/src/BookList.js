import React from 'react'
import Book from './Book'

const BookList = () => {
    const books = [
    {
        name: "Lord of the Rings"
    },
    {
        name: "Jurassic Park"
    }
    ]
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
