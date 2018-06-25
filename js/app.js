// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    //will use this to define the x position of badGuy
    this.x = x;
    //will use this to define the y position of badGuy
    this.y = y;
    // speed of the badGuy
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt

if(this.x > 515){
  this.x = -10;
}
if(this.x === player.x){
  this.x = -10;

}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(){
  this.sprite = 'images/char-princess-girl.png';
  this.x = 210;
  this.y = 400;


}


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

Player.prototype.update = function(dt) {

}



Player.prototype.handleInput = function() {

}
// This class requires an update(), render() and
// a handleInput() method.

var enemy = new Enemy(200, 145, 120);
var enemy1 = new Enemy(200, 220, 175);
var enemy2 = new Enemy(200, 75, 225);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies=[];

allEnemies.push(enemy);
allEnemies.push(enemy1);
allEnemies.push(enemy2);

var counter = 0;
for(let i =0; i<allEnemies.length; i++){
  if(counter == 3){
    allEnemies.push(enemy);
    counter += 3;
  }
}

// Place the player object in a variable called player
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
