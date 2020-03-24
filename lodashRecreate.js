//lodashRecreate.js
// Recreating Lodash library.
//implementing 10 methods that add new function for numbers, strings, objects and arrays
//Part of Codecademy/Web Dev Track

const _ = {
  
    clamp(number,lower,upper){
    const lowerClampedValue = Math.max(number,lower);
    const clampedValue = Math.min(lowerClampedValue,upper);
    return clampedValue;
    },

    inRange (num, start, end) {
        if (end === undefined || end === null) {
            end = start;
            start = 0;
        } else if (start > end)
        {
            let tempStart = start;
            start = end;
            end = tempStart;
        }
        if (num < end && num >= start) {
            return true;
        }else 
            return false;
    }, 

  
  //.words() method
  words(str){
    return str.split('');
  },

  //.pad() method
  pad(string, length){
    if (length <= string.length){
      return string;
    };
    const addToB = Math.floor((length - string.length) / 2);
    const addToE = length - string.length - addToB;
    const paddedString = ' '.repeat(addToB) + string + ' '.repeat(addToE);
    
    return paddedString;
  },
  
  
//.has() method
  has(object,key){
    return object[key] !== undefined;
  },
  
  
// .invert() method
  invert(object){
    const invertedObject = {};
    for(let key in object){
      invertedObject[Object[key]] = key;
    }
    return invertedObject;
  }
  
  //.findKey() method
  findKey(object,predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      }
    }
  },
    
    
  //.drop method
  drop(array,n){
    if(n === 'undefined'){
      n = 1;
    }
    let droppedArray  = array.slice(n,array.length);
    return droppedArray;
  },

    
   //.dropWhile method
  dropWhile(array,predicate){
    let callback = (element,index) =>{
      return !predicate(element,index,array);
    }
    let dropNumber = array.findIndex(callback);
    let droppedArray = this.drop(dropNumber);
    return droppedArray;
  },
    
  //.chunk() method
    chunk(array,size) {
      if(size === 'undefined'){
        size = 1;
      }
      let arrayChunks = [];
      for(let i = 0; i < array.length; i +=size){
        let arrayChunk = .slice(i,i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    },
    
    
    
};




// Do not write or modify code below this line.
module.exports = _;