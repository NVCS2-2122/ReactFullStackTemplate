import React, {useEffect, useState} from 'react'
import Book from './Book'
import Error from './Error'

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
    const [hasError, setError] = useState(false)

    function handleCheckout(bookId) {
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({bookId})
        }
        fetch("/checkout",payload)
            .then(res => res.json())
            .then(({didCheckOut}) => {
                if (didCheckOut) {
                    const book = books.find(b => b.id == bookId)
                    book.available = false
                    setBooks([...books])
                }
                else {
                    setError(true)
                }
            })
    }

    useEffect(() => {
        fetch('/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    },[])
    
    return (
        <div>
            {hasError ? <Error /> : ""}
            {books.map(book => 
                <Book 
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    available={book.available}
                    handleCheckout={handleCheckout}
                />
            )}
        </div>
    )
}

export default BookList
