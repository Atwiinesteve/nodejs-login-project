// Importing Modules
const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const randomstring = require('randomstring');





// Creating User Model.
const userSchema = new mongoose.Schema({
    first_name: {
        type: 'string',
        required: true
    },
    last_name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    date_created: {
        type: 'date',
        default: Date.now
    },
    user_id: {
        type: 'string',
        default: uuid
    },
    randomId: {
        type: 'string',
        default: randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        })
    }
});




// User Model.
const User = mongoose.model('User', userSchema);




// Exporting Model.
module.exports = User;