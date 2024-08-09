const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');
const CORS = require('cors')

const PORT = 2000

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(CORS());

//Connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/davenport')
    console.log('Connected to DB')
}
 
//Routes
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/users', require('./routes/userRouter')); //app.use('/api/users', require('./routes/userRouter'));
app.use('/ottomans', require('./routes/ottomansRouter'));
app.use('/sofas', require('./routes/sofasRouter'));
app.use('/tables', require('./routes/tablesRouter'));

//Error Handling
app.use((err, req, res, next) => {
    if(err.name === "Unauthorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})