// Importing Database Connection
require('./database/database.js');




// Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



// Importing Configs.
require('dotenv').config();




// Importing Application Routes.
const mainRoutes = require('./routes/routes.js');



// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;




// Middlewares setup.
app.use(bodyParser.json());
app.use(cors());




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