//whaleTalk.js Take a phrase like //‘turpentine and turtles’ and //translate it into its “whale talk” //equivalent:‘UUEEIEEAUUEE’.
// Learning JavaScript Loops--Part of 
//Codecademy Web Dev Track

let input = 'hello do you hear me';

//Set the array equal to a variable
//named vowels
const vowels = ['a','e','i','o','u'];

//resultArray to store the vowels
let resultArray = [];

//loop to iterate through each letter
//of the input variable text
for(var i = 0; i < input.length; i++){
  for(var j = 0; j < vowels.length;j++){
     if(input[i] === vowels[j]){
        if(input[i] === 'e') {        
                resultArray.push('ee');
            }else if(input[i] === 'u'){
                resultArray.push('uu');
            }else{
             resultArray.push(input[i]);
            }
        }
    }
}  

console.log(resultArray.join('').toUpperCase());
 



