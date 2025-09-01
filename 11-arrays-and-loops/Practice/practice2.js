const arr=['hello','world','search','good'];

function find(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 'search') return i;
  }
  return -1;
}
console.log(find(arr));

function removeEgg(foods){
  let result=[];
  for(let i=0; i<foods.length; i++){
    if(foods[i] === 'egg') continue;
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(['egg','apple','egg','egg','ham']));

