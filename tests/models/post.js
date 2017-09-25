const Test = require('../index'),
    Post = Test.models.Post;

describe('Models: Posts', () => {
    beforeEach((done) => { 
        Post.remove({}, (err) => {
            done();
        });
    });

    it('it should verification property model', (done) => {
        const post = new Post({
            título: 'titulo',
            corpo: 'corpo'
        });
        post.should.have.property('título');
        post.should.have.property('corpo');
        done();
    });


    it('it should transform to JSON model', (done) => {
        const post = new Post({
            título: 'titulo',
            corpo: 'corpo'
        });
        post.should.have.property('_id');
        post.should.have.property('título');
        post.should.have.property('corpo');

        let json = post.toJSON();
        json.should.not.have.property('_id');
        json.should.have.property('id');

        done();
    });

});