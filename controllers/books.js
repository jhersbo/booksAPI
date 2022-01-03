const router = require('express').Router()
const db = require('../models/index')
const books = require('../models/books')

router.get('/seed', (req, res) => {
    books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


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