const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        min: 6
    },
    email: { 
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024 //because it's being hashed
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);