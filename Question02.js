const prompt = require("prompt-sync")({sigint: true});
let mark = prompt("enter the mark: ");




switch(parseInt(mark/10)){
    case 10:
    case 9:
      console.log("S grade");
      break;
    case 8:
      console.log("A grade");
      break;
    case 7:
      console.log("B grade");
      break;
    case 6:
      console.log("C grade");
      break;
    case 5:
      console.log("D grade");
      break;
    case 4:
      console.log("E grade");
      break;
    case 3: case 2: case 1:
      console.log("Student has failed");
      break;

    default:
      console.log("Invalid input");
}