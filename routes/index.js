var express = require('express')
var router = express.Router()
// 导入微信模板
const wxTemplate = require('../modules/wxTempate')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.post('temp', function (req, res, next) {
  wxTemplate.sendMsg()
  // res.send('respond with a resource')
})

module.exports = router
