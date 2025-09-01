const add = function(){
  console.log(2 + 3);
};
add();

function runTwice(fun){
  fun();
  fun();
}
function fun(){
  console.log('12b');
}
runTwice(fun);

