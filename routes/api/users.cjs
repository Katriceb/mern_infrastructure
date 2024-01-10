// routes/api/users.cjs

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/user.cjs');

// require authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn.cjs');

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST /api/users
router.post('/', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;