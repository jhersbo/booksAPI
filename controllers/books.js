const router = require('express').Router()
const db = require('../models/index')
const books = require('../models/books')

//show book index
router.get('/', (req, res)=>{
    db.books.find()
    .then(books=>{
        res.send({books})
        res.status(200)
        res.type('json')
    })
    .catch((err)=>{
        console.log(err)
        res.render('Error404')
    })
})
//find book by id
router.get('/:id', (req, res)=>{
    db.books.findById(req.params.id)
    .then(book=>{
        res.send({book})
        res.status(200)
        res.type('json')
    })
    .catch(err=>{
        console.log('error', err)
        res.render('Error404')
    })
})
//new book
router.post('/', (req, res)=>{
    db.books.create(req.body)
    .then((book)=>{
        res.send({book})
        res.status(200)
        res.type('json')
    })
    .catch(err=>{
        res.render('Error404')
    })
})
//update existing book
router.put('/:id', (req, res)=>{
    db.books.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((book)=>{
        res.send({book})
        res.status(200)
        res.type('json')
    })
    .catch(err=>{
        res.render('Error404')
    })
})
//delete book
router.delete('/:id', (req, res)=>{
    res.type('json')
    if(res.status === 200){
        res.send('Delete Successful')
    }else{
        res.render('Error404')
    }
})


module.exports = router