let count=0;
let intervalId;
function repeat(){
  clearInterval(intervalId);
  intervalId = setInterval(function(){
    document.title=`(${++count}) New message`;
  },1000);
}
function increase(){
  count++;
  document.title = `(${count}) New message`;
}
function decrease(){
  count--;
  clearInterval(intervalId);
  if(count<=0){
    count=0;
    document.title='App';
  }else{
    document.title = `(${count}) New message`;
  }
}