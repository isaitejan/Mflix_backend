const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise =  global.Promise;

const url = 'mongodb://localhost:27017/sample_mflix';
let collections = {};

let movieSchema = Schema({
    plot : String,
    genres : [String],
    runtime : Number,
    cast : [String],
    num_mflix_comments : Number,
    poster : String,
    title: String,
    fullplot : String,
    languages : [String],
    released : Date,
    directors : [String],
    writers : [String],
    awards : {wins:Number, nominations:Number, text:String},
    lastupdated : Date,
    year : Number,
    imdb : {rating:Number, votes:Number, id:Number},
    countries : [String],
    type : String,
    tomatoes : {
        viewer : {
            rating:Number,
            numReviews : Number,
            meter : Number
        },
        lastUpdated : Date
    }
},{collection : 'movies'});

collections.getDatabaseCollections = ()=>{
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db)=>{
        // console.log("DB connection success");
        return db.model('movies',movieSchema);
    })
    .catch((error)=>{
        let err = new Error("Could not connect to database!");
        err.status = 500;
        throw err;
    })
}

module.exports = collections;