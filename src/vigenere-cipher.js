const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode){
    this.mode = mode;
  }
  encrypt(message, key) {
    if(!message  || !key){
      throw new Error('dont have a argument');
    }
    let lettersCheck = /^[A-Za-z]+$/;
    let messageArray = message.split('');
    let keyCounter = 0;
    let result =[];
    for (let i=0; i <messageArray.length; i++){
      if (messageArray[i].match(lettersCheck)){

        let letterMessage = messageArray[i].toUpperCase();
        let letterKey = key[keyCounter].toUpperCase();

        let charMessage = letterMessage.charCodeAt(0);
        let charKey = letterKey.charCodeAt(0);

        let codedLetter = (charMessage - 65) + charKey;
        if(codedLetter > 90){
          codedLetter = (codedLetter - 90) +64;
        }

        keyCounter++;
        if(keyCounter == key.length){
          keyCounter = 0;
        }

        result.push(String.fromCharCode(codedLetter));

      }
      else {
        result.push(messageArray[i]);}
    }

    if(this.mode == false){
      return result.reverse().join('');
    }
    else return result.join("");

  }    
  decrypt(message, key) {
    if(!message  || !key){
      throw new Error('dont have a argument');
    }
    let lettersCheck = /^[A-Za-z]+$/;
    let messageArray = message.split('');
    let keyCounter = 0;
    let result =[];
    for (let i=0; i <messageArray.length; i++){
      if (messageArray[i].match(lettersCheck)){

        let letterMessage = messageArray[i].toUpperCase();
        let letterKey = key[keyCounter].toUpperCase();

        let charMessage = letterMessage.charCodeAt(0);
        let charKey = letterKey.charCodeAt(0);

        let codedLetter = (charMessage + 65) - charKey;
        if(codedLetter < 65){
          codedLetter = (codedLetter + 90) -64;
        }

        keyCounter++;
        if(keyCounter == key.length){
          keyCounter = 0;
        }

        result.push(String.fromCharCode(codedLetter));

      }
      else {
        result.push(messageArray[i]);}
    }

    if(this.mode == false){
      return result.reverse().join("");
    }
    else return result.join("");


  }
  


}

module.exports = VigenereCipheringMachine;
