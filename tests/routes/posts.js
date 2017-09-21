const Test = require('../index'),
    Post = Test.models.Post;

describe('Posts', () => {
    beforeEach((done) => { //Before each test we empty the database
        Post.remove({}, (err) => {
            done();
        });
    });

    describe('/GET book', () => {
        it('it should GET all the posts', (done) => {
            Test.chai.request(Test.app)
                .get('/v1/api/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});