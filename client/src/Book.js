import React from 'react'

const Book = ({name,id,available}) => {
    return (
        <div 
            data-id={id}
            className="Book"
        >
            <h3>{name}</h3>
            <button
                {available ? '' : 'disabled'}
            >
                {available ? 'Check Out' : 'Not available'}
            </button>
        </div>
    )
}

export default Book
