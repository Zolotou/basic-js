const CustomError = require("../extensions/custom-error");

 function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error('args is not array');
  }
  let arr2 = [...arr];
  let tranformArr = [];
  

  for (let i=0; i<arr2.length; i++){
    if(typeof arr2[i] == 'string'){
      switch(arr2[i]){
        case '--discard-next':
          if(arr2[i+1] == undefined) break;
          arr2.splice(i+1, 1);
          
          break;

        case '--discard-prev':
          let valuePrev = arr2[i-1];
          const lastIndex = transform.length -1;
          const stringValuePrev = new String(valuePrev);
          if(tranformArr[lastIndex] == undefined) break;
          if(stringValuePrev.indexOf('--') !== -1) break;
           tranformArr.length--;
          break;
        
        case '--double-next':
          if(arr2[i+1] == undefined) break;
           arr2.splice(i+1,0, arr2[i+1]); 
          break;
        
        case '--double-prev':
          let value =  arr2[i-1];
          if(value == undefined) break;
          const stringValue = new String(value);
          if(stringValue.indexOf('--') !== -1) break;
          tranformArr.push(arr2[i-1]);
          break;
        default: 
          tranformArr.push(arr2[i]);
          break;        
      }
      
    }
    else tranformArr.push(arr2[i]);
  }
  
  return tranformArr;

};



module.exports = transform;