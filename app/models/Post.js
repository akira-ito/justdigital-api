var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const PostSchema = Schema({
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
    versionKey: false,
    toJSON: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

module.exports = mongoose.model('Post', PostSchema);