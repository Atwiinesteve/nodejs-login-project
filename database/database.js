// Importing Modules
const mongoose = require('mongoose');




// Importing Configurations
require('dotenv').config();




// Database Connection Settup.
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
    })
    .then(() => { console.log('Database Connected Successfully...') })
    .catch((err) => { console.log('Database Connection Failed...' + err.message) });




//Exporting Database Connection.
module.exports = mongoose;