var express = require('express');
var router = express.Router();
var request = require('request');
var sha1 = require('sha1');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 获取微信公众号ticket
router.post('/get_ticket', (req, res) => {
  var noncestr = 'duodongzhen';
  var timestamp = (+new Date()).toString().slice(0, -3);
  var url = req.body.url;
  var appId = 'wx5ad3873e1b830dbc';
  var appScrect = 'c4dfdac708770e10f6952b9aeaafc64c';

  // js-sdk配置信息获取
  request.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + appScrect, function(err, respone, body) {

    var accessToken = JSON.parse(body).access_token;

    request.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + accessToken + '&type=jsapi', function(err, respone, body) {

      var str = 'jsapi_ticket=' + JSON.parse(body).ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url;

      var signature = sha1(str);

      res.json({
        signature: signature,
        appId: appId,
        ticket: JSON.parse(body).ticket,
        timestamp: timestamp,
        noncestr: noncestr
      })
    })
  })
});

module.exports = router;
