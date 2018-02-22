var tileHeight = 80;
var tileWidth = 101;

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.initialLocation();
    this.setEnemySpeed();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If the enemy is offscreen to the right, reset its 
    // location to a random row on the left and assign a
    //  random speed.
    if (this.x >= 606) {
        this.initialLocation();
        this.setEnemySpeed();
    }
    // Move the enemy to the right at its assigned speed.
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemy appears one tile width offscreen to the left, on
// a random row between 1 and 3.
Enemy.prototype.initialLocation = function() {
    var topEnemyRow = 1,
        numEnemyRows = 3;
    this.x = -tileWidth;
    this.y = Math.floor(Math.random() * numEnemyRows + topEnemyRow) * tileHeight;
};

// Enemy's speed is random between 20 and 100
Enemy.prototype.setEnemySpeed = function() {
    this.speed = (Math.random() * 80) + 20;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.initialLocation();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {

};

Player.prototype.initialLocation = function() {
    this.x = 2 * tileWidth;
    this.y = 5 * tileHeight;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});