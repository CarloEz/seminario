const router= require('express').Router();
const controller= require('../controllers/EnfermedadController');

router.get('/',controller.all);

router.get('/:id',controller.id);

router.get('/paciente/:id',controller.paciente);

router.post('/',controller.save);

router.put('/:id',controller.put);

router.delete('/:id',controller.sup)

module.exports=router;