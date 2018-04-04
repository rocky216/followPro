const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const app = express();
const port = 9000
var routers = require('./routers/index')
var expressWs = require('express-ws')(app);

//数据推送
app.ws('/', function(ws, req){
  // ws.on('message', function(msg) {
  //   console.log(msg, "msg====");
  // });
  // setInterval(function(){
  //   ws.send('your message');
  // },3000)

})

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use('/api',routers)

app.listen(port, function(error){
  if(!error){
    console.log(`localhost:${port}`)
  }
})
