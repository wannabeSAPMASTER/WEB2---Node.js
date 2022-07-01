
var p = {
  v1:'v1',
  v2:'v2',
  function f1() {
    console.log(this.v1);
  },
  function f2() {
    console.log(this.v2);
  }
}

p.f1();
p.f2();
