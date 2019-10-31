// Create a function that returns the total number of parameters passed in.
//
// Examples
// numberArgs("a", "b", "c") ➞ 3
//
// numberArgs(10, 20, 30, 40, 50) ➞ 5


function numberArgs() {
    console.log(arguments.length);
}

numberArgs(1, 2, 3)