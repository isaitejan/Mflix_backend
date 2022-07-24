const connection = require('../utilities/connection');

let db = {};

db.getMovies = async ()=>{
    let coll = await connection.getDatabaseCollections();
    let res = await coll.find({$and:[{poster:{$exists:true}},{poster:{$ne:null}}]}).limit(100);
    return res;
//     return connection.getDatabaseCollections().then((op)=>{
//         return op.findOne().then((ot)=>{
//             console.log(ot);
//         })
//     })
}

db.getSearch = async (searchString)=>{

    let coll = await connection.getDatabaseCollections();
    let res = await coll.find({title: {$regex: new RegExp(searchString)}});
    // console.log(res);
    return res;
}

module.exports = db;