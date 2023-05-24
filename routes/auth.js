const router = require('express').Router();
const User = require('../models/user')

// <DOMAIN>/api/user/...

router.get('/', (req, res) => {
   res.send("hello"); 
});

// make the callback async when saving - cos it's a request to mongo server
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser)
    } catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login', (req, res) => {
    
});

module.exports = router;