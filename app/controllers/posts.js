const Post = require('../models/Post');

module.exports.list = () => {
    return Post.find({});
}

module.exports.create = (data) => {
    return Post.create(data);
}

module.exports.get = (id) => {
    return Post.findById(id);
}

module.exports.update = (id, data) => {
    return Post.findByIdAndUpdate(id, data);
}

module.exports.delete = (id, data) => {
    return Post.findByIdAndRemove(id);
}
