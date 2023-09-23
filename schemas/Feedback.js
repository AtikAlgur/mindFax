const mongoose = require('mongoose');

let FeedBackSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:  true,
        unique:  true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('feedback', FeedBackSchema);