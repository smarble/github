
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let storyWords = story.split(' ');

console.log(storyWords.length);


// 3. There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called newStory(originally asked to use betterWords). There are several ways that you could achieve this.

let newStory = storyWords.filter(function(element){
        return !unnecessaryWords.includes(element);
    }
);

console.log(newStory.length)
console.log(newStory)
console.log(newStory.join(' '));

//4. There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this.

const howManyTimesReally = newStory.filter(element => {
    return element === 'really';
});
howManyTimesReally;
console.log(howManyTimesReally);
console.log(howManyTimesReally.length);


const howManyTimesVery = newStory.filter(element => {
    return element === 'very';
});
howManyTimesVery;
console.log(howManyTimesVery);
console.log(howManyTimesVery.length);


const howManyTimesBasically= newStory.filter(element => {
    return element === 'basically';
});
howManyTimesBasically;
console.log(howManyTimesBasically);
console.log(howManyTimesBasically.length);


console.log(howManyTimesReally.length + howManyTimesVery.length + howManyTimesBasically.length);

//4. Alternate, shorter, and better answer using "of" within the argument of a for loop:

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
    if (word === "really"){
        reallyCount += 1
    } else if (word === "very"){
        veryCount += 1
    } else if (word === "basically"){
        basicallyCount += 1
    }
};

console.log(reallyCount);
console.log(veryCount);
console.log(basicallyCount);



console.log(howManyTimesReally.length + howManyTimesVery.length + howManyTimesBasically.length);


//5a. My correct answer below. Now, count how many sentences are in the paragraph.
//This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

let periodCount = 0;
let exclamationCount = 0;

for (element of storyWords) {
    if (element[element.length-1] === "."){
        periodCount += 1
    } else if (element[element.length-1] === "!"){
        exclamationCount += 1
    }
};

console.log(periodCount);
console.log(exclamationCount);


//5b. Another suggested answer below. Now, count how many sentences are in the paragraph.
//This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

let sentences = 0;
array.forEach(word => {
    if (word[word.length-1] === '.' || word[word.length-1] === '!') {
        sentences+=1;
    }
});




//6.Log these items to the console:
//The word count
//The sentence count
//The number of times each overused word appears
//You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

console.log(`There are ${storyWords.length} words, ${periodCount + exclamationCount} sentences, and an overused word appears ${howManyTimesReally.length + howManyTimesVery.length + howManyTimesBasically.length} times in the story`);


//7. Now, log the betterWords array to the console as a single string.

console.log(newStory.join(' '));


// EXTRA: COUNT EVERY WORD. NOTE THIS SOLUTION USES AN OBJECT AND ARRAY

const wordCounter = {}


story.split(" ").forEach(word => {
        if(wordCounter[word]){
            wordCounter[word]= wordCounter[word] + 1
        }else{
            wordCounter[word] = 1
        }

        return
    }
)

