// array, object

far f = function(){
  console.log(1+1);
  console.log(1+2);
} // 변수에 넣을 수 있다면 값이라고 할 수 있음.

// var i = if(true){console.log(1)}; // 조건문은 값이 아님.
// var 2 = while(true){console.log(1)};

var a = [f];
a[0]();

var o = {
  func:f
}
o.func();
