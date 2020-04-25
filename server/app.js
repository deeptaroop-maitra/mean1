const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv/config');

const app = express();

//Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const loginRoute = require('./routes/login');

//Middleware
app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
}));
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);

//Routes
app.get('/', (req,res) => {
    res.send('You are on Home');
});

//app.get('/post', (req,res) => {
//    res.send('You are on Posts');
//});

//console.log(process.env);

//Connect to DB 
//mongoose.connect(process.env.db_connection, { useNewUrlParser : true })
mongoose.connect('mongodb://localhost/rest', { useNewUrlParser : true })
    .then(() => console.log('connected to mongoDb...'))
    .catch(err => console.error('could not connect to mongoDb...', err));

//Listening to the server
app.listen(3000);