let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 30;

if (age >= 18 && registeredEarly === true){
    /*raceNumber = raceNumber + 1000;*/
    raceNumber += 1000;
};

if (age >= 18 && registeredEarly === true){
    console.log(`You are #${raceNumber} and your race starts at 9:30am.`)
}else if (age >= 18 && registeredEarly === false){
    console.log(`You are #${raceNumber} and your race starts at 11:00am.`)
}else if (age < 18){
    console.log(`You are #${raceNumber} and your race starts at 12:30pm.`)
}