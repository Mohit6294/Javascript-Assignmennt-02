const prompt = require("prompt-sync")({sigint: true});
let a = prompt("enter the starting range : ");
let b = prompt("enter the ending range : ");


function prime(a,b){
  let x = [];
  for(let i=a;i<=b;i++){
    if(isPrime(i)=== true){
      x.push(i);
    }
  }
  for(let i=0;i<x.length;i++){
    let y = fact(x[i]);
    console.log(y);
  }
}
function isPrime(num){
  if(num < 2) return false;
  for(let i=2;i * i <= num;i++){
    if(num%i === 0)
    return false;
  }
  return true;
}

function fact(num){
  let fact = 1;
  for(let i = 1;i<=num ;i ++){
    fact *= i;
  }
  return fact;
}

prime(a,b);



