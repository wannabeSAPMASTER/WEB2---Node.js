console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

function sum(first){
  console.log(first); //=> 2

}
sum(2,3); // 2

function sum2(first, second){  // parameter
  console.log(first+second); //  계산까지 해서 화면에 출력함.
}
sum(2,3); // 5 argtment


Math.round(1.6);
console.log(Math.round(1.6)); // 출력하기 위해. console 출력.


function sum3(first, second){  // parameter
  return first+second; //=> 2. 계산만 해서 Return을 만나면 즉시 함수 종료됨. 
}
console.log(sum3(2,3));
