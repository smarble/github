
// Can you find any of the letters of one string (S) inside another string (J)? How many occurances?
// Nested for loops



for(let i=1; i<4; i++){
    console.log(i + " Outer loop")
    for (let j= 1; j< 4; j++){
        console.log("  " + j + " Inner loop")
    }
}




console.log("Let's begin");

let numJewelsInStones = function(J, S) {
    let counter = 0;

    for(let i = 0; i < J.length; i++){
        console.log(S.charAt(i))
        for(let x = 0; x < S.length; x++){
            console.log("  " + S.charAt(x))
            if (S.charAt(i) == J.charAt(x)){
                counter = counter + 1;
                console.log(counter);
            }
        }

    }
    console.log(counter);
};

numJewelsInStones("Jade", "JadeInRock");



