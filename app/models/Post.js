var mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    título: {
        type: String,
        required: true,
        trim: true
    },
    corpo: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Post', PostSchema);