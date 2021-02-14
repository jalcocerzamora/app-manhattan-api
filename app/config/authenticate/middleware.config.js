const HTTP_STATUS = require('../constant/ErrorData').ERROR_STATUS_ARRAY;
const reqResponse = require('../cors/responseHandler');
const express   = require('express');
const jwt       = require('jsonwebtoken');

const middleware = express.Router();

module.exports = (app) => {
    middleware: {
        return middleware.use((req, res, next) => {
            const authorization = req.headers.authorization;
            const token = authorization ? req.headers.authorization.split(' ')[1] : false;
            // const token = req.headers["authorization"].split(' ')[1];
            // const authorization = req.headers.authorization;
            // const token = authorization ? req.headers.authorization.split(' ')[1] : false;
            if (token) {
                jwt.verify(token, app.get('private-key'), (err, decoded) => {
                    if (err) {
                        return res.status(414).json(reqResponse.successResponse(414));
                        //.json({ mensaje: 'Invalid Token.' });
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                res.status(415).send(reqResponse.errorResponse(415));
                //.send({mensaje: 'Token not provided.'});
            }
        });
    }
}
