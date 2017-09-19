const express = require('express'),
    router = express.Router(),
    posts = require('./posts');

router.use('/posts', posts);

module.exports = router;
