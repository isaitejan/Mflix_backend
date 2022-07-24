const express = require('express');
const router = express.Router();
const db = require('../model/model');

router.get('/movies',async (req, res)=>{
    let output = await db.getMovies();
    res.send(output);
})

router.get('/search/:searchString',(req,res)=>{
    let sstring = req.params.searchString;
    db.getSearch(sstring).then((op)=>{
        res.send(op);
    })
})

module.exports = router;