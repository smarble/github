// https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/content-items/31d53dadc35c3c675bd8ce980f8396d6
// Codecademy: Build Front-End Web Applications from Scratch (React)
// https://www.codecademy.com/programs/de06bc8242e205ac016cd1bde05139bd/items/f802fc58b3827da6fda4e2a32d88301c
// Day 16 Team Stats

const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer (firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opName, myPoints, oppPoints) {
        let game = {
            opponent: opName,
            teamPoints:  myPoints,
            opponentPoints: oppPoints,
        };
        this.games.push(game);
    },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Flying Tigers', 10, 1);
team.addGame('Hungry Hippos', 10, 1);
team.addGame('Stinking Pirates', 10, 1);

console.log(team._games);

