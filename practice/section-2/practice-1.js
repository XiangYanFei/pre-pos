'use strict';

function countSameElements(collection) {
  var result = [];
  collection.forEach(function (a){
    var position;   //记录位置
    position = result.findIndex(function (b) {
      return b.key == a;
    });
    if (position == -1) { //在result中还找不到a的信息
      result.push({key:a, count:1});
    }
    else {
      result[position].count++;  //在result中已经存在a，统计a的个数
    }
  });
  return result;
}
