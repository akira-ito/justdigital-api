let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

module.exports = {
    app: require('../app'),
    routes: {
        posts: require('../app/routes/posts')
    },
    controllers: {
        posts: require('../app/controllers/posts')
    },
    models: {
        Post: require('../app/models/Post')
    },
    chai: chai,
    should: should
}