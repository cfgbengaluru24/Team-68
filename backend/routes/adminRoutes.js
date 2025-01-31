const express = require('express');
const router = express.Router();
const adminController = require('../controllerFolder/adminHandler');

// Routes
router.post('/', adminController.createAdmin);
router.get('/', adminController.getAdmins);
router.get('/:id', adminController.getAdminById);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
