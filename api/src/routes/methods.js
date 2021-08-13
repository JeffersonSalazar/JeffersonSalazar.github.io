let schema = require('../database/schema');

let router = require('express').Router();

let { body, validationResult } = require('express-validator');

const VALIDATIONS = [
    body('name').trim().matches(/^[a-zA-Z\s]{4,16}$/).withMessage('este campo no admite numeros'),
    body('email').trim().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/).withMessage('el email no es valido'),
    body('post').trim().matches(/^[a-zA-Z0-9_.+-À-ÿ\s]{10,100}$/).withMessage('este campo no admite simbolos')
];

router.post('/message', VALIDATIONS, async (req, res) => {
    let { name, email, post } = req.body;

    let errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({err: errors.array()});

    const DATA = new schema ({
        name,
        email,
        post
    });

    await DATA.save();

    res.status(200).json({msn: 'dato enviado'});
});

module.exports = router;