var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Log multiple values
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "The Clamps", "Bender"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function
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
        
    
        //remove enemy health
        enemyHealth = enemyHealth - playerAttack;
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
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check players health
        if (playerHealth <=0) {
            window.alert (playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i =0; enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {

            // let player know what round they ar in, remember arrays start at 0 so it needs to have 1 added
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // pass the pickedEnemyName variables value into the fight function
            fight(pickedEnemyName);

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

var endGame = function() {
    if (playerHealth > 0) {
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 that'll be 7 dollars");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You're Too broke, what a joke!");
            } break;
        case 'UPGRADE':
        case 'upgrade':
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 that'll be 7 dollars");
            } else {
                window.alert("Dont waste my time, you dont have the money");
            } break;
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

// start first game when page loads
startGame();