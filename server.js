const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/books',(req,res) => {
    const query = db.prepare("SELECT * FROM books")
    const books = query.all()
    res.json({
        books
    })
})

app.listen(3000,() => {
    console.log("server started")
})