const arr=[10,20,30];
console.log(arr);
arr[arr.length-1]=99;

function getLastValue(arr){
  console.log(arr[arr.length-1]);
}
getLastValue(arr);

function getSwap(arr){
  const temp=arr[0];
  arr[0]=arr[arr.length-1];
  arr[arr.length-1]=temp;
}
getSwap(arr);
console.log(arr);

for(let i=0; i<=10; i+=2){
  console.log(i);
}
for(let i=5; i>=0; i--){
  console.log(i);
}

let i=0;
while(i<=10){
  console.log(i);
  i+=2;
}
i=5;
while(i>=0){
  console.log(i);
  i--;
}

function addOne(arr){
  for(let i=0; i<arr.length; i++){
    arr[i]+=1;
  }
  console.log(arr);
}
addOne(arr);

function addNum(arr,num){
  for(let i=0; i<arr.length; i++){
    arr[i]+=num;
  }
}
addNum(arr,2);

const arr1=[1,1,2];
const arr2=[1,1,3];
function addArrays(arr1,arr2){
  for(let i=0; i<arr1.length; i++){
    arr1[i]+=arr2[i];
  }
}
addArrays(arr1,arr2);
console.log(arr1);


function countPositive(nums){
  let count=0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]>0) count++;
  }
  console.log(count);
}
let nums=[1,-3,5];
countPositive(nums);

nums=[-2,3,-5,7,10];
countPositive(nums);

function minMax(nums){
  let min=null;
  let max=null;
  for(let i=0; i<nums.length; i++){
    if(min>nums[i]) min=nums[i];
    if(max<nums[i]) max=nums[i];
  }
  console.log(min);
  console.log(max);
}
minMax(nums);

function countWords(words){
  const obj={};
  for(let i=0; i<words.length; i++){
    const word=words[i];
    if(obj[word]){
      obj[word]++;
    }else{
      obj[word]=1;
    }
  }
  console.log(obj);
}
const words=['apple','grape','apple','apple'];
countWords(words);