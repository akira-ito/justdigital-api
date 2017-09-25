const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken');

router.post('/', function(req, res) {
    if (req.body.nome == process.env.USER && req.body.senha == process.env.PASSWORD){
        var token = jwt.sign(usuario, app.get('jwt-auth'), {
            expiresInMinutes: 1440 
        });

        res.json({
            success: true,
            message: 'Token criado!!!',
            toke: token
        });
    } else {
        res.json({ success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!' });
    }
});


module.exports = router;

