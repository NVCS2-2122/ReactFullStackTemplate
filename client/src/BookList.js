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

    function handleCheckout(bookId) {
        const book = books.find(b => b.id == bookId)
        book.available = false
        setBooks([...books])

        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({bookId})
        }
        fetch("/checkout",payload)
            .then(res => res.json())
            .then(res => console.info(res))
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
