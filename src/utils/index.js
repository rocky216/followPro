import axios from "axios"



export function fetch(opt,cb){
  var settings = {
    url: opt.url,
    mothed: opt.mothed?opt.mothed:'get',
  }
  var dataParams = {}
  if(settings.mothed=='get'){
    _.assign(settings,{
      params: opt.data
    })
  }else{
    _.assign(settings,{
      data: opt.data
    })
  }
  return axios(settings)
          .then((res)=>{
            cb(res)
          })
          .catch((error)=>{
            console.log("请求错误！！");
          })

}
