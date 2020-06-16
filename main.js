/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(string){
  if (string.length >20){
    return "That's a long string!"
  }
  }
  
  function isItMedium(string2){
    if (string2.length >=10 && string2.length <=20 )
  {
    return "That's a regular sized string!"
  } else{
    return 
  }
  }
  
  function isItShort (string3){
    if (string3.length <10){
      return "That's a small string!"
    } else{
      return 'That\'s not a small string!'
    }
  }
  
  function howLongIsMyString(string4){
    if(string4.length >20){
      return "That's a long string!"}
    else if (string4.length>= 10 && string4.length<=20)
    { return "That's a regular sized string!"}
      else if (string4.length <10)
    {return "That's a small string!"}
    
  }
  function instructorHeight(name){
  if (name ==='Colin'){
      return 62
  }else if(name ==='Mesuara'){
  return 67
  }
  else{
      return 69
    }
    }





/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}