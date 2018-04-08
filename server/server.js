const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const ejs = require("ejs")
const config = require('../webpack.config.js');
const app = express();
const port = 9000
var routers = require('./routers/index')
var expressWs = require('express-ws')(app);

var isDevelopment = process.env.NODE_ENV == "development"?true:false;

console.log(process.env.NODE_ENV);

//数据推送
app.ws('/', function(ws, req){
  // ws.on('message', function(msg) {
  //   console.log(msg, "msg====");
  // });
  // setInterval(function(){
  //   ws.send('your message');
  // },3000)

})
app.use('/api',routers)
if(isDevelopment){
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
}else{
  app.use(express.static("build"));
  app.engine('.html', require('ejs').__express);
  app.set('view engine', 'html');
  app.set('views', path.resolve(__dirname,'../build'))
  // app.set('views', __dirname + '/build');

  app.get('*', function(req, res){
    res.render('index')
  })
}



app.listen(port, function(error){
  if(!error){
    console.log(`localhost:${port}`)
  }
})
