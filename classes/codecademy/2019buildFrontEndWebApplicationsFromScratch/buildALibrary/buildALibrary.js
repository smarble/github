/*
Codecademy: Build Front-End Web Applications from Scratch (React)
 https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/content-items/31d53dadc35c3c675bd8ce980f8396d6

BUILD A LIBRARY
DAY 17
https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/content-items/fad8e5607a0fdd1b45123a6a3eec1813
*/



//CREATE SUPER(PARENT) CLASS MEDIA
class Media{
    constructor(title){
        this._isCheckedOut = false;
        this._title = title;
        this._ratings = [];
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    set isCheckedOut(newIsCheckedOut){
        this._isCheckedOut = newIsCheckedOut;
    }
    get title(){
        return this._title;
    }
    get ratings(){
        return this._ratings;
    }
    //CREATE METHODS
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
        return this.ratings.reduce( (prev, curr) => prev + curr ) / this.ratings.length;
    }
    addRating(newRating){
        this.ratings.push(newRating);
    }
}



//CREATE SUBCLASS BOOK
class Book extends Media{
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}


//CREATE SUBCLASS MOVIE
class Movie extends Media{
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}


//CREATE SUBCLASS CD
class Cd extends Media {
    constructor(title, artist, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}



//TESTING BOOK
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


//TESTING MOVIE
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());