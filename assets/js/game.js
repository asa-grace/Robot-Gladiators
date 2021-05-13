var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Log multiple values
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "The Clamps", "Bender"];
for(var i =0; enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


//create function
//fight();
var promptfight = function() {
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemys health
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemys health
        if (enemyHealth <=0) {
                window.alert (enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

        // remove players health
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
        //check players health
        if (playerHealth <=0) {
            window.alert (playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        
        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! That'll be about 3.50")
            //subtract money from player
            playerMoney = playerMoney - 3.50;
        } else {
            fight ();
        }
    }
}
// execute function
//fight();