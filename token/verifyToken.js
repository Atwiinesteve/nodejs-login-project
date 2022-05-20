// Importing Modules.
const jwt = require('jsonwebtoken');



// Verifying Token.
const verifyToken = (req, res) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).send('Unauthorized -  Access denied');
        } else {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        }

    } catch (error) {
        console.log({
            name: error.name,
            message: error.message
        });
        res.status(500).send('Invalid Token...');
    }
}



// Exporting Verifying Token.
module.exports = verifyToken;