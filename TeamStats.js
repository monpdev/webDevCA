//TeamStats.js 
//Create and extract information about  sports team. 
//Create data using the JavaScript data structures: arrays, objects, etc.

//team object
const team = {
//team object has 2 properties
  _players:[{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 25
            },
            {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 31
            },
            {
            firstName: 'Jack',
            lastName: 'Petersons',
            age: 27
            }
           ],
  _games:[{
            opponent: 'Rocket',
            teamPoints: 87,
            opponentPoints: 67
            },
          {
            opponent: 'Laker',
            teamPoints: 99,
            opponentPoints: 70
            },
          {
            opponent: 'Celtics',
            teamPoints: 65,
            opponentPoints: 87
            }
        ],
//Create getter methods for _players and _games
      get players(){
        return this._players;
      },
      get games(){
        return this._games;
      },
      
        
  addPlayer (firstName, lastName, age) {
    //Create a player object
    let player = {
      firstName: firstName,
      lastName: lastName,
      age:age
    };
    this.players.push(player);
  },
  
  //addGame() method for recording game results called addGame
  addGame(opp,myPts,oppPts){
      const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints:oppPts
    };
    this.games.push(game);
    }
};

//Invoke addPlayer method on the following players

team.addPlayer('Steph','Curry',28);
team.addGame('Titans',100,98);


console.log(team.players);
console.log(team.games.opponent);