'use strict';

function collectSameElements(collectionA, collectionB) {
  var stringB=collectionB.join("");
  var arrB=stringB.split(",");
  var arr=new Array();
  for (var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<arrB.length;j++)
    {
      if(collectionA[i]===arrB[j])
      {
        arr.push(arrB[j]);
      }
    }
  }
  return arr;
}

