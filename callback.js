/*
function a (){
  console.log('A');
}
a();
*/

var a = function(){
  console.log('A');
} // JS 에서는 함수는 값이다.
//  a();

function  slowFunc(callback){
  callback();
}

slowfunc(a);
