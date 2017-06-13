/**
 * Created by zhouzhigang on 2017/6/12.
 */
var express = require('express'),
  app     = express(),
  Mock    = require('mockjs');



/* 学校 */
app.post('/vas/list', function (req, res) {
  var Random = Mock.Random,
    data   = Mock.mock({
      'result|10': [{
        'vas_id': '@integer(60, 1000)',
        'vas_name': '@cname'
      }],
      'success': '@integer(0, 1)'
    });

  res.send( JSON.stringify(data, null, 4) );
});


module.exports = app;
