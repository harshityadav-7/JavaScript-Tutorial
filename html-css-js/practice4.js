function gameClicked(element,category){
  const clickedClass=`${category}-clicked`;
  if(element.classList.contains(clickedClass)){
    element.classList.remove(clickedClass);
  }else element.classList.add(clickedClass);
}