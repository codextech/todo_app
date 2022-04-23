
const express = require('express');

const router = express.Router();

const Todo = require('../models/todo.model');




let todos = [
    { id: 1, name: "sehri" },
    { id: 2, name: "namaz" },
    { id: 3, name: "dahi lani hai" },
    { id: 4, name: "aftari" },
];




// TODO CRUD

/* get all data */
router.get('/', async (req, res) => {

    try {

        const result  = await Todo.find(); // db query

        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something to worry about',
        })
    }


});

/* get detail */
router.get('/:id', async (req, res) => {

    try {
        
    const params = req.params // {id: 2}
    let id = params.id;

    // const result = todos.find(x => x.id == id);

    const result = await  Todo.findById(id)

    if (!result) {
        return res.status(400).json({
            data: null,
            message: 'record not found'
        })
    }
    res.status(200).json({
        data: result
    })
    } catch (error) {
        res.status(500).json({
            message: 'Something to worry about',
        })
    }

})

/* add data */
router.post('/', async (req, res) => {
    const body = req.body // 

    // todos.push(body);

    const result = await Todo.create(body);


    res.status(200).json({
        data: result
    })
})


/* edit data */
router.put('/:id', (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = params.id;

    const result = todos.find(x => x.id == id);

    if (!result) {
        return res.status(400).json({
            data: null,
            message: 'record not found'
        })
    }

    /* update name */
    result.name = body.name;
    const index = todos.findIndex(x => x.id == id);
    todos[index] = result;


    res.status(200).json({
        data: result
    })
})

/* delete data */
router.delete('/:id', (req, res) => {
    const params = req.params;
    const id = params.id

    todos.filter(x => x.id != id)

    res.status(200).json({
        data: true
    })
})


// TODO CRUD END


module.exports = router;

