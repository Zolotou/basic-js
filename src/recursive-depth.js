const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  
  calculateDepth(arr) {
    let counterFinding = 0;
    let secondSecondCounter = 0;
    let counterDepth = false;
    let secondCounter = 0;

    if(Array.isArray(arr)){
      counterFinding++;
      for(let i=0; i<arr.length; i++){
        
        if(counterDepth && Array.isArray(arr[i])){
          secondSecondCounter = this.calculateDepth(arr[i]);
           if(secondSecondCounter > secondCounter) {
             secondCounter = secondSecondCounter;
             secondSecondCounter = 0;
           }
          
        }
        

        if(!counterDepth && Array.isArray(arr[i])){
          counterDepth = true;
          secondCounter += this.calculateDepth(arr[i]);
        }



      }  
    }
    else if(!Array.isArray(arr)){ return};
    
   let resultFinding= counterFinding + secondCounter;
    
    return resultFinding;

   
  }

  
  
};