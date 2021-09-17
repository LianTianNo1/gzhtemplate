var express = require('express')
var router = express.Router()
// 导入微信模板
const wxTemplate = require('../modules/wxTempate')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.post('temp', function (req, res, next) {
  wxTemplate.sendMsg({
    appid: 'wxa62bb7619cace8e5',
    secret: 'faf956436f7af94cb8ed67031c8a8c92',
  })
  // res.send('respond with a resource')
})

module.exports = router
