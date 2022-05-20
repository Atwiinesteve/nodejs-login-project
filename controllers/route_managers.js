// Route Manager/Controller Functions.

// Importing Modules.
const bcrypt = require('bcrypt');


// Importing Custome Routes.
const User = require('../models/user.js');


// Home Route.
const homeRoute = function(req, res) {
    res.send('Welcome to the New JWT Tutorial Project _v4')
}


// Create Route.
const createUser = async(req, res) => {

    const userAlreadyExists = await User.findOne({ email: req.body.email });

    if (userAlreadyExists) {
        return res.status(404).send('User already exists...');
    } else {

        const salt = await bcrypt.genSalt(20);
        const hash = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        });

        user.save()
            .then(() => { res.status(201).send(user) })
            .catch((err) => { res.status(500).send(err.message) });
    }

}




// Exporting Route Functions.
module.exports = {
    homeRoute,
    createUser
}