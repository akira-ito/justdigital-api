const express = require('express'),
    router = express.Router(),
    { check, validationResult } = require('express-validator/check'),
    Controller = require('../controllers/posts');

router.get('/', (req, res) => {
    Controller.list()
        .then(data => {
            res.json(data);
        })
});

router.post('/', [
    check('titulo', 'Titulo deve ser maior que 5 letras').isLength({ min: 5 }),
    check('corpo', 'Corpo deve ser maior que 10 letras').isLength({ min: 10 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
        return res.status(422).json({ errors: errors.mapped() });

    Controller.create(req.body)
        .then(data => {
            res.json(data);
        });
        //Implementar os erros 404,400
});

router.get('/:id', (req, res) => {
    Controller.get(req.params.id)
        .then(data => {
            res.json(data);
        });
        //Implementar os erros 404,400
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
