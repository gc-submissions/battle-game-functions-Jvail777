"use strict";

let randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};

let chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2) - 1;
  return randNum === 0 ? opt2 : (randNum = 1) ? opt1 : opt2;
};

let attackPlayer = function (health) {
  return health - randomDamage();
};

let logHealth = (player, health) => {
  console.log(player + " health: " + health);
  return;
};
console.log(logHealth("joe", 100));

let logDeath = (winner, loser) => {
  console.log(winner + " defeated " + loser);
  return;
};
console.log(logDeath());

let isDead = (health) => {
  return health <= 0 ? true : false;
  //return health <= 0;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("James", "David", 100, 100);
