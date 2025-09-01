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