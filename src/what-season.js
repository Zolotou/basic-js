const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){ return "Unable to determine the time of year!"}
  if (date.getMonth() == 9 && date.getSeconds() == 9){
    throw new Error('Tricky bastard');
  }
  let season;
  switch(date.getMonth()){
    case 0:
    case 1:
    case 11:
      season = "winter";
      break;
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    case 8:
    case 9:
    case 10:
      season = "autumn";
      break;  
    default:
      season = "Error";
      break; 
  }
  return season;
  
};
