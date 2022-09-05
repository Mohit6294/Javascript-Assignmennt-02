let sum = 0;
for(let i=0;i<=1000;i++){
  if(i % 5 || i%3){
    sum += i;
  }
}
console.log(`The sum of multiple of 3 & 5 between is : ${sum}`);