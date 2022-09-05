const prompt = require("prompt-sync")({sigint : true});
console.log("Please enter the sides of triangle ");
const a = prompt("enter the first side ");
const b = prompt("enter the second side ");
const c = prompt("enter the 3rd side of triangle ");




function TriangleCheck(a=0,b=0,c=0){
  if(a===b && b===c && a===c){
    return `Triangle is equilateral`;
  }
  else if(a === b || b===c || c===a){
    return `Triangle is Isosceles`;
  }
  else{
    return `Triangle is Scalene`;
  }
}

const TriangleType = TriangleCheck(a,b,c);
console.log(`The type of Triangle is : ${TriangleType}`);
