var express = require("express")
var app = express()
var expressWs = require('express-ws')(app);
var router = express.Router()
var controller = require("../controller/index")


router.get('/echrats', controller.echartsTable.somtData)
app.ws('/ws', function(ws, req){
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
})

module.exports = router
