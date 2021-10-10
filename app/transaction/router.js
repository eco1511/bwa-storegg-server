var express = require('express');
var router = express.Router();
const { index, actionStatus, viewDetail } = require('./controller');
const {isLoginAdmin} = require('../middleware/auth')

router.use(isLoginAdmin);
router.get('/', index);
router.put('/status/:id', actionStatus);
router.get('/detail/:id', viewDetail);

module.exports = router;