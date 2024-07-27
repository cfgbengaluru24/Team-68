const express = require('express');
const router = express.Router();
const flwController = require('../controllerFolder/flwHandler');

// Routes
router.post('/', flwController.createFLWUser);
router.get('/', flwController.getFLWUsers);
router.get('/:id', flwController.getFLWUserById);
router.put('/:id', flwController.updateFLWUser);
router.delete('/:id', flwController.deleteFLWUser);

module.exports = router;
