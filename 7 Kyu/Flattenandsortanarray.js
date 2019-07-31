"use strict";

function flattenAndSort(array) {
let flat=[]
  array.forEach((i)=>{
    i.forEach((j)=>{
      flat.push(j);
    });
  });
  numSort = function (a,b) {
    return a - b;
};
  flat.sort(numSort);
  return flat;
}