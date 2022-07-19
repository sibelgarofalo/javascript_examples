const team = {
  _players: [
    { firstName: "Mario", lastName: "Rossi", age: 10 },
    { firstName: "Mario", lastName: "Bianchi", age: 10 },
    { firstName: "Mario", lastName: "Verdi", age: 10 },
  ],
  _games: [
    { opponent: "Acme", teamPoints: 10, opponentPoints: 12 },
    { opponent: "Iris", teamPoints: 15, opponentPoints: 12 },
    { opponent: "Peppa", teamPoints: 12, opponentPoints: 12 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({ firstName: newFirstName, lastName: newLastName, age: newAge });
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({ opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints });
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
