// Route Manager/Controller Functions.

// Importing Modules.
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// Importing Custome Routes.
const User = require('../models/user.js');
const { validate } = require('../models/user.js');


// Home Route.
const homeRoute = function(req, res) {
    // res.send('Welcome to the New JWT Tutorial Project _v4')
    res.render('login', { title: 'Login' });
}


// Create Route.
const createUser = async(req, res) => {

    const alreadyThere = await User.findOne({ email: req.body.email });
    if (alreadyThere) {
        return res.status(404).send('User Already Exists...')
    } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        })
        user.save()
            .then(() => { res.status(201).send(user) })
            .catch(err => { console.log(err.message) });
    }

}


// Login Route.
const loginUser = async(req, res) => {

    // Check User if already Exists.
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).send('User with email not Found...');
    } else {
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        if (!validatePassword) {
            return res.status(401).send('Invalid Password ... ');
        } else {

            // Assign Token to Logged-in User
            const token = jwt.sign({
                user_id: user.user_id
            }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
        }
    }

}




// Exporting Route Functions.
module.exports = {
    homeRoute,
    createUser,
    loginUser
}