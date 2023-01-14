var x = 0;
var y = 1;
// 普通函数
function test() {
  console.log(this.x);
}
// 构造函数
function Test2() {
  this.y = 2;
}
var obj = {
  x: 1,
  test: test,
};
var obj2 = new Test2();

var arr = [test,new Test2()]

console.log(this.x)