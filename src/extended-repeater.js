const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let originalString = new String(str);
  let result = '';
  let optionsCounter = options;
  let addition = '';
  let repeater = optionsCounter.repeatTimes;
  let additionRepeater = optionsCounter.additionRepeatTimes;
  let separator = '';
  let additionSeparator = '';

  
 
  if(optionsCounter.separator == undefined){
    separator = "+";
  }
  else separator = optionsCounter.separator;

  if(optionsCounter.additionSeparator == undefined){
    additionSeparator = "|";
  }
  else additionSeparator = optionsCounter.additionSeparator;

  if ('additionSeparator' in optionsCounter == false){
    
    additionSeparator = ''
  }
  
  
  if(repeater == undefined){
    repeater = 1;
    addition = optionsCounter.addition;
  }


  while (additionRepeater > 0){
    if(additionRepeater == 1){
      addition+= optionsCounter.addition;
      additionRepeater--;
    }
    else{
    addition += optionsCounter.addition + additionSeparator;
    additionRepeater--;
    }
  }

 

  while(repeater > 0){

    if(repeater == 1){
      result += originalString +addition;
      repeater--;
    }
    else{
      result += originalString + addition + separator;
      repeater--;
    }
      
  }
  

  return result; 

  
};
  