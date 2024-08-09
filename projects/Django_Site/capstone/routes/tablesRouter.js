const Tables = require('../models/Tables');
const express = require('express');
const tablessRouter = express.Router();

tablessRouter
    //Get All
    .get('/', (req, res, next) => {
        Tables.find((err, comms) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(comms);
            }
        })
    })

    //Get One
    .get('/:tablesId', (req, res, next) => {
        Tables.find({tables: req.params.tablesId}, (err, comms) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comms)
        })
    })

module.exports = tablessRouter