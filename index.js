var fun=function(){
    var a=1;
    console.log(a);
    return function(){
        a++;
        console.log(a);
    }
}
var f = fun();
f();
f();
f();