
function myFunc(str){
    for (var i = 0; i < str.length; i++) {
        console.log(i);
        if (str[i] === "a" || str[i] === "A" ||
        str[i] === "e" || str[i] === "E" ||
        str[i] === "i" || str[i] === "I" ||
        str[i] === "o" || str[i] === "O" ||
        str[i] === "u" || str[i] === "U") {
            return `There is a vowel at index ${i}!`;
        }
    }
    return `No vowels at ${str}!`;

}

var result = myFunc(`Hello!`);
console.log(result);












function myFunc(str){
    for (var i = 0; i < str.length; i++) {
        console.log(i);
        if (str[i] === "a" || str[i] === "A" ||
            str[i] === "e" || str[i] === "E" ||
            str[i] === "i" || str[i] === "I" ||
            str[i] === "o" || str[i] === "O" ||
            str[i] === "u" || str[i] === "U") {
            return i;
        }
    }
    return `No vowels at ${str}!`;

}