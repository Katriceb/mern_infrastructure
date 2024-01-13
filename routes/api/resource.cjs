const express = require('express');
const router = express.Router();
const resourcesCtrl = require('../../controllers/api/resources.cjs');

// GET /api/resources
router.get('/', resourcesCtrl.index);
// GET /api/resources/:id
router.get('/:id', resourcesCtrl.show);

module.exports = router;