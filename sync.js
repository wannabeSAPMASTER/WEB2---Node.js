var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C'); // 결과 : AB  C
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result); // => 함수가 끝나면 B 바로 실행
}
); // 파일 읽어오고 나중에 함수 호출하여 수행. = call back 
console.log('C'); // 결과 : ACB
