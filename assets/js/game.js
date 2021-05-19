/* Game Functions */

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//create function (with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player to fight or run  
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");
        
        if (promptFight === "fight" || promptFight === "FIGHT") {
            var confirmFight = window.confirm("Get Ready!")

        } else if (promptFight === "skip" || promptFight === "SKIP") {
            
            //confirm skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Thatll be about tree fitty');
                //subtract the tree fitty
                playerMoney = playerMoney - 3.5;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // if player picks skip, confirm and then stop the loop
        
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
            
        // check enemys health
        if (enemyHealth <=0) {
            window.alert (enemyName + " has died!");

            //award moneys
            playerMoney = playerMoney + 23;
            
            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove players health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfoInfo.health = Math.max(0, playerInfo.health - damage);

        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check players health
        if (playerHealth <=0) {
            window.alert (playerName + ' has died!');
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i =0; enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they ar in, remember arrays start at 0 so it needs to have 1 added
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // set health for picked enemy
            pickedEnemyObj.health = randomNumber(40,60);

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // pass the pickedEnemyName variables value into the fight function
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before nxt round
                var storeConfirm = window.confirm("The fight is over, Would you like to visit the store before the next round?");

                // if confirm take them to the store function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
        // if player isnt alive, stop the game
        endGame();
};

// function to end entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins
    if (playerInfo.Health > 0) {
        window.alert("Great job, you've survived Robot Gladiators, You now have a score of " + playerMoney + '.');
    } else {
        window.alert("Thanks for playing, better luck next time!");
    }

    // ask player to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thanks for playing Robot Gladiators! Come back soon!')
    }
};

// Go to shop between battles
var shop = function() {
    // ask player what they'd like to do 
    var shopOptionPrompt = window.prompt('Welcome to Botniks General Store! Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.');

    // Use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            playerInfo.refillHealth();
            break;
        case 'UPGRADE':
        case 'upgrade':
            playerInfo.upgradeAttack();
            break;
        case 'LEAVE':
        case 'leave':
            window.alert('Now leaving Botniks General Store');

            //do nothing, so function will end
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

/* End Game Functions */

/* Game Info / Variables */
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
        window.alert("YOu don't have enough money!");
        }
    }, upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// enemy info
var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Tumble',
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log (enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/* End Game Info / Variables */

/* Run Game */
// start first game when page loads
startGame();