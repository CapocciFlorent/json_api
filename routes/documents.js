const router = require('express').Router();
const documentsValidation = require('../documents/documentsValidation');
const documentsController = require('../documents/documentsController');

/* GET */

router.get('/', documentsValidation.getAll, documentsController.getAll);

router.get('/:id', documentsValidation.getOne, documentsController.getOne);

router.get('/:firstId/diff/:secondId', documentsValidation.diff, documentsController.diff);

/* POST */

router.post('/', documentsValidation.post, documentsController.post);

/* PUT */

router.put('/:id', documentsController.put);
// router.put('/:id', documentsValidation.put, documentsController.put);

/* PATCH */

router.patch('/:id', documentsController.patch);
// router.patch('/:id', documentsValidation.patch, documentsController.patch);

/* DELETE */

router.delete('/:id', documentsValidation.remove, documentsController.remove);

module.exports = router;
