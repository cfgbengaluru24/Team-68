const express = require('express');
const router = express.Router();
const beneController = require('../controllerFolder/beneHandler');

// Routes
router.post('/', beneController.createBeneUser);
router.get('/', beneController.getBeneUsers);
router.get('/:id', beneController.getBeneUserById);
router.put('/:id', beneController.updateBeneUser);
router.delete('/:id', beneController.deleteBeneUser);
router.get('/phone' , beneController.getBeneUserByPhoneNumber);
router.post('/update' , beneController.updateSchemesAvailed);

module.exports = router;
