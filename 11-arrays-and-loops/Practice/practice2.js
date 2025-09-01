const arr=['hello','world','search','good'];

function findIndex(arr,target){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === target) return i;
  }
  return -1;
}
console.log(findIndex(arr));

function removeDuplicates(arr){
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(findIndex(arr,arr[i]) === i){
      result.push(arr[i]);
    }
  }
  return result;
}


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
  newFood=food.slice().reverse();
  let count=0;
  let result = [];
  for(let i=0; i<food.length; i++){
    if(newFood[i] === 'egg' && count<total){
      count++;
      continue;
    }
    result.push(newFood[i]);
  }
  return result.reverse();
}
console.log(remove(['egg','apple','egg','egg','ham'],2));


console.log(removeDuplicates(['green','red','blue','red']));