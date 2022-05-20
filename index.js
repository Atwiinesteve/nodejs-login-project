// Importing Database Connection
require('./database/database.js');




// Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');



// Importing Configs.
require('dotenv').config();




// Importing Application Routes.
const mainRoutes = require('./routes/routes.js');



// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}




// Middlewares setup.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE, PATCH');
    next();
})




// Views Setup.
app.set('view engine', 'ejs');
app.set('views', './views');




// Serving Static Files.
app.use('/static', express.static(path.join(__dirname, 'public/styles')));
app.use('/images', express.static(path.join(__dirname, 'public/images')))




// Application Routes.
app.use('/', mainRoutes);




// Server Initialization
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });