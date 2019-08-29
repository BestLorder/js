//定义一个add 方法
function add(x, y) {
  return x + y;
}

//用call 来调用 add 方法
function myAddCall(x, y) {
  //调用 add 方法 的 call 方法
  // return add.call(this, x, y);
  return add(x, y);
}

//apply 来调用 add 方法
function myAddApply(x, y) {
  //调用 add 方法 的 applly 方法
  return add.apply(this, [x, y]);
}

console.log(myAddCall(10, 20)); //输出结果30

console.log(myAddApply(20, 20)); //输出结果40


var name = '小白';

var obj = {
  name: '小红'
};

function sayName() {
  return this.name;
}

console.log(sayName.call(this)); //输出小白

console.log(sayName.call(obj)); //输入小红



//父类 Person
function Person() {
  this.sayName = function () {
    return this.name;
  }
}

//子类 Chinese
function Chinese(name) {
  //借助 call 实现继承
  Person.call(this);
  this.name = name;

  this.ch = function () {
    alert('我是中国人');
  }
}

//子类 America
function America(name) {
  //借助 call 实现继承
  Person.call(this);
  this.name = name;

  this.am = function () {
    alert('我是美国人');
  }
}


//测试
var chinese = new Chinese('成龙');
//调用 父类方法
console.log(chinese.sayName()); //输出 成龙

var america = new America('America');
//调用 父类方法
console.log(america.sayName()); //输出 America