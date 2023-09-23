const mongoose = require('mongoose');

let PersonalStoriesSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    story:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:  true,
        unique:  true
    },
    tag:{
        type: String,
        default: "MyLife"
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('story', PersonalStoriesSchema);