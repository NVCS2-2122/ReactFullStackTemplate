import React from 'react'

const Book = ({name,id,available,handleCheckout}) => {
    function handleCheckout_simple(bookId) {
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
    
    return (
        <div 
            data-id={id}
            className="Book"
        >
            <h3 style="color: red;">{name}</h3>
            <button
                {available ? '' : 'disabled'}
                onClick={() => handleCheckout(id)}
            >
                {available ? 'Check Out' : 'Not available'}
            </button>
        </div>
    )
}

export default Book
