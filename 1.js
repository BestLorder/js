// Generator函数实现：
function* entries(obj) {
  for (let k of Object.keys(obj)) {
    yield [k, obj[k]];
  }
}
// 非Generator函数实现：
// function entries(obj) {
//   let arr = [];
//   for (let k of Object.keys(obj)) {
//     arr.push([k, obj[k]]);
//   }
//   return arr;
// }

let a = entries({ name: "a", age: 18 });
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
