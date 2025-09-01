/* function gameClicked(element,category){
  const clickedClass=`${category}-clicked`;
  if(element.classList.contains(clickedClass)){
    element.classList.remove(clickedClass);
  }else element.classList.add(clickedClass);
} */

function gameClicked(element,category){
  const allButtons =document.querySelectorAll('button');

  allButtons.forEach(button =>{
    button.classList.remove('game-clicked','music-clicked','tech-clicked');
  });

  const clickedClass=`${category}-clicked`;
  element.classList.add(clickedClass);
}