const Sofas = require('../models/Sofas');
const express = require('express');
const sofasRouter = express.Router();

sofasRouter
    //Get All
    .get('/', (req, res, next) => {
        Sofas.find((err, comms) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(comms);
            }
        })
    })

    //Get One
    .get('/:sofasId', (req, res, next) => {
        Sofas.find({sofas: req.params.sofasId}, (err, comms) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comms)
        })
    })

module.exports = sofasRouter