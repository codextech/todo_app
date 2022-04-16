const express = require('express');
const app = express();

const port = 3000


/* middlewares */

app.use(express.json());

/* app.use((req, res , next) => {
    console.log('Middle ware # 1');
    next()
})

app.use((req, res , next) => {
    console.log('Middle ware # 2');
    next()
})
 */

/* routes */
/* get , post , put , delete */

let todos = [
  { id: 1, name: "sehri" },
  { id: 2, name: "namaz" },
  { id: 3, name: "dahi lani hai" },
  { id: 4, name: "aftari" },
];

// TODO CRUD

/* get all data */
app.get('/todo' , (req , res) => {

    try {
        res.status(200).json({
            data: todos
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something to worry about',
        })
    }


});

/* get detail */
app.get('/todo/:id' , (req , res) => {
    const params = req.params // {id: 2}
    let id = params.id;

    const result = todos.find(x => x.id == id);

    if(!result) {
       return res.status(400).json({
            data: null,
            message: 'record not found'
        })
    }
    res.status(200).json({
        data: result
    })
})

/* add data */
app.post('/todo' , (req , res) => {
    const body = req.body // 

    todos.push(body);
   
    res.status(200).json({
        data: body
    })
})


/* edit data */
app.put('/todo/:id' , (req , res) => {
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
app.delete('/todo/:id' , (req , res) => {
    const params = req.params;
    const id = params.id

    todos.filter(x => x.id != id)
   
    res.status(200).json({
        data: true
    })
})







// TODO CRUD END






/* server listen */

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})