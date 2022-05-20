// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const { v4: uuid } = require('uuid');
const random = require('randomstring');





// Creating User Model.
const userSchema = new mongoose.Schema({
    first_name: {
        type: 'String',
        required: true
    },
    last_name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    date_created: {
        type: 'Date',
        default: Date.now
    },
    user_id: {
        type: 'String',
        default: uuid
    },
    randomId: {
        type: 'string',
        default: random.generate({
            length: 4,
            charset: 'alphanumeric'
        })
    }
});




// User Model.
module.exports = mongoose.model('User', userSchema);