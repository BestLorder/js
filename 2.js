let a = new Set([...[1, 2, 3], ...[2, 3, 4]]);
let b = new Set([
  ...[{ id: 1 }, { id: 2 }, { id: 3 }],
  ...[{ id: 2 }, { id: 3 }, { id: 4 }],
]);
console.log(a);
console.log(b);

let c = Array.from(b);
console.log(c);

let obj = {};
let arr = c.reduce((item, next) => {
  if (!obj[next.id]) {
    item.push(next);
    obj[next.id] = true;
  }
  return item;
}, []);
console.log(arr);
