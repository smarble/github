/** Whale Talk
 Walkthrough:   https://youtu.be/q4ZgP6O4_0w
Take a phrase like 'turpentine and turtles' and translate it into its "whale talk" equivalent: 'UUEEIEEAUUEE'.

 There are a few simple rules for translating text to whale language:

 There are no consonants. Only vowels excluding "y".
 The u's and e's are extra long, so we must double them in our program.
 Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

 To accomplish this translation, we can use our knowledge of loops. Let's get started!

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
*/

let input = 'Take out the trash, Marvin.';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //console.log('inputIndex = ' +    input[inputIndex]);//counts the number of charachters in the input string.
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    if (input[inputIndex] === vowels[vowelsIndex]){
      if (input[inputIndex] === 'e'){
        resultArray.push('ee');
        }
      else if(input[inputIndex] === 'u'){
        resultArray.push('uu');
      }
      else{
        resultArray.push(input[inputIndex]);
      }
    };
  //console.log('vowelsIndex = ' + vowels[vowelsIndex]);//counts the number of charachters in the vowels array.
  };
};
console.log(resultArray.join('').toUpperCase());


