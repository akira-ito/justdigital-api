const express = require('express'),
    router = express.Router(),
    Controller = require('../controllers/posts');

router.get('/', (req, res) => {
    Controller.list()
        .then(data => {
            res.json(data);
        })
});

router.post('/', (req, res) => {
    Controller.create(req.body)
        .then(data => {
            res.json(data);
        });
});

router.get('/:id', (req, res) => {
    Controller.get(req.params.id)
        .then(data => {
            res.json(data);
        });
});

router.put('/:id', (req, res) => {
    Controller.update(req.params.id, req.body)
        .then(data => {
            res.json(data);
        });
});

router.delete('/:id', (req, res) => {
    Controller.delete(req.params.id)
        .then(data => {
            res.json(data);
        });
});

module.exports = router;
