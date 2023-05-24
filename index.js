require('dotenv').config()
// app
const express = require('express');
const app = express();
// routes
const authRoute = require('./routes/auth')

// db
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONN_STRING, { useNewUrlParser: true })
        .then(console.log('connected to mongo'));


// middleware
app.use(express.json())
app.use('/api/users', authRoute);

app.listen(3002, () => { console.log('listening on 3002')});