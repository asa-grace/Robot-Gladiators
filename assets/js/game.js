var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Log multiple values
console.log(playerName, playerHealth, playerAttack)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function() {
    // alert fight starting
    window.alert("Welcome to Robot Gladiators!");

    // Subtract playerAttack from enemyHealth. Use that result to update enemyHealth
    enemyHealth = enemyHealth - playerAttack;

    // Log a message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    // Subtract enemyAttack from playerHealth. Use that result to update playerHealth
    playerHealth = playerHealth - enemyAttack;

    // Log a result message to the console to let us know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
    
    //check players health
    if (playerHealth <=0) {
        window.alert(playerName + " has died! LoL!")
    } else {
        window.alert(playerName + " still has " + playerHealth + " left." );
    };

    // Check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };
};

// execute function
fight();
