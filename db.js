const mongoose = require('mongoose');
const mongooseURI = "mongodb://127.0.0.1/mindfax";

const createMongoServer = async ()=>{
    await mongoose.connect(mongooseURI, {useNewUrlParser: true})
    console.log("Connected to Mongo")
}
module.exports = createMongoServer;