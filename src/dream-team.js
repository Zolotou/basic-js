const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null || members.length  == 0) return false;
  let name = [];
  for (let i = 0; i<members.length; i++){
    if (typeof members[i] == 'string'){
      let letter = members[i].trim().substr(0,1).toUpperCase();
      name.push(letter);
    }
  }
  return name.sort().join("");
};
