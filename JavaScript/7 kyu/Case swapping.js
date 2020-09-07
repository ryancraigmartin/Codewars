/*
Given a string, swap the case for each of the letters.
e.g. CodEwArs --> cODeWaRS
*/

function swap(str){
  let newString= "";

  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase())
    {
      newString += str[i].toUpperCase();
    } 
    else {
      newString += str[i].toLowerCase();
    }
  }
  console.log(newString);
  return newString;
  }
