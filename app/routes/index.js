const express = require('express'),
    router = express.Router(),
    posts = require('./posts'),
    jwt = require('jsonwebtoken');

router.use(function(req, res, next) {
  	var token = req.body.token || req.query.token || req.headers['Authorization'];
	if (token) {
		jwt.verify(token, app.get('jwt-auth'), function(err, decoded) {      
		  	if (err) {
		    	return res.json({ success: false, message: 'Failed to authenticate token.' });    
		  	} else {
		    	req.decoded = decoded;    
		    	next();
		  	}
		});
	} else {
		return res.status(403).send({ 
		    success: false, 
		    message: 'No token provided.' 
		});
	}
});

router.use('/posts', posts);

module.exports = router;
