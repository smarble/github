/*
Codecademy: Build Front-End Web Applications from Scratch (React)
https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/content-items/31d53dadc35c3c675bd8ce980f8396d6

School Catalogue
Day 17
https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/content-items/88ad0fdba91f27ba6e33cb2d7a415820
*/
class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents (newNumberOfStudents){
        if (typeof newNumberOfStudents === number) {
            this._numberOfStudents = newNumberOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts(){
        return `${this.name} educates
    ${this.numberOfStudents} students at the
    ${this.level} school level.`
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex]
    }
}



//PRIMARYSCHOOL CLASS
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

//HIGHSCHOOL CLASS
class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

//TESTING HIGHSCHOOL CLASS
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

//TESTING PRIMARYSCHOOL CLASS
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13');
console.log(lorraineHansbury.quickFacts());

//TESTING SCHOOL CLASS
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
