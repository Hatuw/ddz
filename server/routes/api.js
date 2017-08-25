var express = require('express');
var router = express.Router();
var request = require('request');
var sha1 = require('sha1');
var bodyParser = require('body-parser');  
 
var jsonParser = bodyParser.json()  
  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

// 获取微信公众号ticket
router.post('/get_ticket', (req, res) => {
  var noncestr = 'duodongzhen';
  var timestamp = + new Date();
  var url = req.body.url;
  var appId = 'wx374486a038696729';
  var appScrect = 'a0b12c42569f805a443c23e1f659ef6b';

  // js-sdk配置信息获取
  request.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appScrect}`, (err, respone, body) => {

    var accessToken = JSON.parse(body).access_token;

    request.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ accessToken +'&type=jsapi', function(err, respone, body) {

      var str = 'jsapi_ticket='+ JSON.parse(body).ticket +'&noncestr='+ noncestr +'&timestamp='+ timestamp +'&url='+ url +'';

      var signature = sha1(str);
      
      res.json({
        signature,
        appId,
        ticket: JSON.parse(body).ticket,
        timestamp,
        noncestr
      })
    })
  })
});

router.post('/get_code', (req, res) => {
  console.log(req.body);
  res.send('asdasd');
});

router.post('/check_code', (req, res) => {
  var code = req.body.code;
  res.json({
    status: true,
    token: 'demoOpenId'
  });
});

router.get('/order', (req, res) => {
  var type = req.query.type;
  if (type == 'place') {
    res.send({
      data: [{
        "name": "南海,广东轻工职业技术学院'",
        "place": 1
      }, {
        "name": "广州,广东轻工职业技术学院",
        "place": 2
      }, {
        "name": "广州,广东轻工职业技术学院",
        "place": 2
      }, {
        "name": "广州,广东轻工职业技术学院",
        "place": 2
      }, {
        "name": "广州,广东轻工职业技术学院",
        "place": 2
      }]
    })
  } else {
    res.send({
      "data": [{
        "serial": "B170715001",
        /*机器标识*/
        "count": 2 /*剩余可租借数量*/
      }]
    });
  }
});

router.post('/order',urlencodedParser, (req, res) => {
  console.log(req.body);
  res.end();
})

router.post('/demo',urlencodedParser, (req, res) => {
  console.log(req.body);
  res.end();
})

module.exports = router;