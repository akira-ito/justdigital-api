// module.exports.update = (id, data) => {
//     return Post.findByIdAndUpdate(id, data);
// }

// module.exports.delete = (id, data) => {
//     return Post.findByIdAndRemove(id);
// }


const Test = require('../index')

let server = Test.app;
let Controller = Test.controllers.posts;
let Post = Test.models.Post;

const data = {título: 'test', corpo: 'corpo'};

describe('Controllers: Posts', () => {

    beforeEach(done => {
        Post.remove({}, (err) => {
            done();
        });
    });

    describe('list()', () => {
        it('it should all the posts', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                    done();
                })
        });

        it('it should get one the post', (done) => {
            const post = new Post(data)
            post.save()
                .then(Controller.list)
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(1);
                    done();
                })
        });
    });

    describe('create()', () => {
        it('it should create the post', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(p => Controller.create(data))
                .then(Controller.list)
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(1);
                })
                .then(done);
        });
    });

    describe('get()', () => {
        it('it should get null', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(Controller.get('1234569'))
                .then(data => {
                    Test.should.not.exist(data);
                })
                .then(done);
        });

        it('it should get post', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(p => Controller.create(data))
                .then(data => Controller.get(data._id))
                .then(data => {
                    Test.should.exist(data);
                    data.should.have.property('título', 'test');
                    data.should.have.property('corpo', 'corpo');
                })
                .then(done);
        });
    });


    describe('update()', () => {
        it('it should update null', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(Controller.update('1234569'))
                .then(data => {
                    Test.should.not.exist(data);
                })
                .then(done);
        });

        it('it should update post', (done) => {
            let update = {
                título: 'teste update',
                corpo: 'corpo update'
            }
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(p => Controller.create(data))
                .then(data => Controller.update(data._id, update))
                .then(data => Controller.get(data._id))
                .then(data => {
                    Test.should.exist(data);
                    data.should.have.property('título', 'teste update');
                    data.should.have.property('corpo', 'corpo update');
                })
                .then(done);
        });
    });


    describe('delete()', () => {
        it('it should delete null', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(Controller.delete('1234569'))
                .then(data => {
                    Test.should.not.exist(data);
                })
                .then(done);
        });

        it('it should delete post', (done) => {
            Controller.list()
                .then(data => {
                    data.should.be.an('array');
                    data.should.have.length(0);
                })
                .then(p => Controller.create(data))
                .then(data => Controller.delete(data._id))
                .then(data => Controller.get(data._id))
                .then(data => {
                    Test.should.not.exist(data);
                })
                .then(done);
        });
    });

});