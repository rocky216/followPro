var controller = require("./controller")

var json = {
  status: true,
  msg: "请求成功"
}

function echatrsTable(){

}

echatrsTable.prototype.somtData = function(req, res){
  json.res = [10,30,40]
  res.send(json)
}

module.exports = new echatrsTable()
