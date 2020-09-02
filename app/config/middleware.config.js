const express   = require('express');
const jwt       = require('jsonwebtoken');

const middleware = express.Router();

module.exports = (app) => {
    middleware: {
        return middleware.use((req, res, next) => {
            const token = req.headers["authorization"].split(' ')[1];
            if (token) {
                jwt.verify(token, app.get('private-key'), (err, decoded) => {
                    if (err) {
                        return res.status(404).json({ mensaje: 'Invalid Token.' });
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                res.status(403).send({
                    mensaje: 'Token not provided.'
                });
            }
        });
    }
}