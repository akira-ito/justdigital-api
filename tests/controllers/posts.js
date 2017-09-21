// const Post = require('../models/Post');

// module.exports.list = () => {
//     return Post.find({});
// }

// module.exports.create = (data) => {
//     return Post.create(data);
// }

// module.exports.get = (id) => {
//     return Post.findById(id);
// }

// module.exports.update = (id, data) => {
//     return Post.findByIdAndUpdate(id, data);
// }

// module.exports.delete = (id, data) => {
//     return Post.findByIdAndRemove(id);
// }


const Test = require('../index')

let server = Test.app;
let Controller = Test.controllers.posts;

describe('Posts', () => {
    describe('/GET book', () => {
        it('it should GET all the posts', (done) => {
            Controller.list()
                .then(data => {
                    done();
                })
        });
    });

});