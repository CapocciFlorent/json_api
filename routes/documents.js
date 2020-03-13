const router = require('express').Router();
// const documentsValidation = require('../documents/documentsValidation');
const documentsController = require('../documents/documentsController');

/* GET */

router.get('/', documentsController.getAll);
router.get('/:id', documentsController.getOne);

/* POST */

router.post('/', documentsController.post);

/* PUT */

router.put('/:id', documentsController.put);

/* PATCH */

router.patch('/:id', documentsController.patch);

/* DELETE */

router.delete('/:id', documentsController.remove);

// /* GET */

// router.get('/', documentsValidation.getAll, documentsController.getAll);
// router.get('/:id', documentsValidation.getOne, documentsController.getOne);

// /* POST */

// router.post('/', documentsValidation.post, documentsController.post);

// /* PUT */

// router.put('/:id', documentsValidation.put, documentsController.put);

// /* PATCH */

// router.patch('/:id', documentsValidation.patch, documentsController.patch);

// /* DELETE */

// router.delete('/:id', documentsValidation.delete, documentsController.delete);

module.exports = router;
