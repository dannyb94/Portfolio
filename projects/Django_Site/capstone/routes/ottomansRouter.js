const Ottomans = require('../models/Ottomans');
const express = require('express');
const ottomansRouter = express.Router();

ottomansRouter
    //Get All
    .get('/', (req, res, next) => {
        Ottomans.find((err, comms) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(comms);
            }
        })
    })

    //Get One
    .get('/:ottomansId', (req, res, next) => {
        Ottomans.find({ottomans: req.params.ottomansId}, (err, comms) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comms)
        })
    })

module.exports = ottomansRouter