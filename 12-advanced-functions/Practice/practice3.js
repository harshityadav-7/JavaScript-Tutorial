const multiply = (a,b)=>a*b;
console.log(multiply(2,3));

const countPositive = [-2,3,-5,7,10].filter((value)=> value>0).length;
console.log(countPositive);


const addNum =(array,num)=>{
  return array.map((value,index)=>{
    return value*num;
  });
};
console.log(addNum([1,2,3],2));

const removeEgg = (foods)=>{
  return foods.filter((value)=>{
    return value!='egg';
  });
};
console.log(removeEgg(['egg','apple','egg','egg','ham']));