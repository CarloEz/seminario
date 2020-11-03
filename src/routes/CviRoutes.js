const router= require('express').Router();
const controller= require('../controllers/CviController');

router.get('/',controller.all);

router.get('/:id',controller.id);

router.get('/registro/:id',controller.registro);

router.post('/',controller.save);

router.put('/:id',controller.put);

router.delete('/:id',controller.sup);

module.exports=router;