const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/*disksNumber, turnsSpeed */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  countTurns = 0;
  let first = [];
  let second = [];
  let third = [];
  
  for (let i=0; i<disksNumber; i++){
    first.push(i);
  }



  while (first.length == 0 && (second.length == disksNumber || third.length == disksNumber)){
    if (second.length == 0){
      second.push(first.pop);
      countTurns++;
      return;
    }
    else if(third.length == 0){
      third.push(first.pop);
      countTurns++;
      return;
    }
    else if(first.length == 0){

    }


  }
};
