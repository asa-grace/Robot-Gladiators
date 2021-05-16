var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Log multiple values
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "The Clamps", "Bender"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


//create function
//fight();
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
}
// execute function
//fight();

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
        
        // use debugger to pause script from running and check whats going on at that moment in code
        // debugger;

        // pass the pickedEnemyName variables value into the fight function
        fight(pickedEnemyName);
    }
    // if player isnt alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game Over!')
        break;
    }
}