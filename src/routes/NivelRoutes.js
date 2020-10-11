const router= require('express').Router();
const controller= require('../controllers/NivelController');

router.get('/',controller.all);

router.get('/:id',controller.id);

router.post('/',controller.save);

router.put('/:id',controller.put);

router.delete('/:id',controller.sup)

module.exports=router;