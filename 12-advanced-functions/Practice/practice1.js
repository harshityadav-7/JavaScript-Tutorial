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


function touched(){
  const docElement = document.querySelector('.start-button');
  if(docElement.innerHTML === 'Start'){
    docElement.innerHTML ='Loading!';
    setTimeout(function(){
      docElement.classList.add('finished-button');
      docElement.innerHTML ='Finished!';
    },1000);
  }else{
    docElement.classList.remove('finished-button');
    docElement.innerHTML ='Start';
  }
}
let timeoutId;
function addCart(){
  const docElement = document.querySelector('.message-container');

  clearTimeout(timeoutId);
  docElement.innerHTML='Added';

  timeoutId = setTimeout(function(){
    docElement.innerHTML='';
  },2000);
}
