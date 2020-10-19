const CustomError = require("../extensions/custom-error");

const chainMaker = {

  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value == null){
      this.array.push('( null )');
      return this;
    }
    else if(value == undefined){
      this.array.push('( )');
      return this;
    }
    else{
      let valueString = new String(value);
      this.array.push('( ' +valueString+ ' )');
      return this;
    }
  },
  removeLink(position) {
    if(typeof position == 'number'){
      if(position > this.array.length -1){
        this.array = [];
        throw new Error ("this position don't exist");
      } 
      this.array.splice(position-1, 1);
      return this;
    }
    else {
     this.array = [];
     throw new Error ("not a number");}
  },
  reverseChain() {
    this.array.reverse(); 
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
