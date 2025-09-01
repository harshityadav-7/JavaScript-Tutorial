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
//console.log(removeEgg(['egg','apple','egg','egg','ham']));

function remove(food,total){
  food=food.reverse();
  let count=0;
  let result = [];
  for(let i=0; i<food.length; i++){
    if(food[i] === 'egg' && count<total){
      count++;
      continue;
    }
    result.push(food[i]);
  }
  return result.reverse();
}
console.log(remove(['egg','apple','egg','egg','ham'],2));