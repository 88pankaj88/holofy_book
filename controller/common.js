'use strict'

const Utility = require('../utility');

const Common = {
    respond: function (req, res) {
        res.json(req.returnResponse);
    },
    handleError: function (err, req, res) {
        Object.keys(err).forEach(function (key) {
            req.returnResponse[key] = err[key];
        });
        if ((!('status' in req.returnResponse)) || isNaN(req.returnResponse.status)) {
            req.returnResponse.status = 500;
        }
        res.status(req.returnResponse.status);
        res.json(req.returnResponse);
    }
};
module.exports = Common;