const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');// ODM

const todoRoutes = require('./routes/todo.route')

const app = express();
const port = 3001

/* middlewares */
app.use(cors());
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

app.use('/todo', todoRoutes)


/* DB Connection */

mongoose.connect('mongodb://localhost:27017/mern_saturday').then(res => {
    console.log('Db Connected : mongodb://localhost:27017/mern_saturday...');
}).catch(err => {
    console.log('DB ERR: ' , err);
});

/* End DB Conn. */

/* server listen */
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})