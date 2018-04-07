"use strict";
import $ from "jquery"
import data from "mock/data.js"

function demo1(myChart){

  console.log(data)

  myChart.setOption({
    title: {
      show: true,
      text: '标题组件，包含主标题和副标题。',
      link: "http://echarts.baidu.com/option.html#title.link"
    },
    legend: {
      type: 'plain',
      show: true,
    },
    grid: {
      show: true
    },
    dataZoom: [{
      start: '80'
    },{
      type: "inside"
    }],
    visualMap: [
      
    ],
    xAxis: {
      show: true,
      data: data.map(function(item){
        return item[0]
      })
    },
    yAxis:{
      show: true,
      //gridIndex: 1
    },
    axisPointer: {
      show: true
    },
    
    series: {
      type: "line",
      data: data.map(function(item){
          return item[1]
      })
    }
  })


}


export default  demo1
