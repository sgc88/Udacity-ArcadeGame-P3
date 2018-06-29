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
  this.x = Math.floor(Math.random() * -10);
  this.speed = getRandomInt(80, 250);
}

};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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



Player.prototype.handleInput = function(keyPress) {

      if (keyPress == 'left' && this.x > 0) {
          this.x -= 100;
      };
      if(keyPress == 'left' && this.x < 15){
        this.x = 15;
      }
      if(keyPress == 'right' && this.x > 0){
        this.x += 100;
      }
      if(keyPress == 'right' && this.x >410){
        this.x = 410;
      }
      // if (keyPress == 'up' && this.y > 0) {
      //     this.y -= 80;
      // };
      // if(keyPress == 'up' && this.y < 80){
      //   this.x = 80;
      // }
      if(keyPress == 'up' && this.y > 0){
        this.y -= 80;
      }
      if(keyPress == 'down' && this.y < 405){
        this.y += 80;
      }
      if(keyPress == 'down' && this.y >400){
        this.y = 400;
      }
      // if(keyPress == 'up' && this.y > 0){
      //   this.y -= 80;
      // }
      // if(keyPress == 'down' && this.y < 80){
      //   this.y += 80;
      // }



}
// This class requires an update(), render() and
// a handleInput() method.

var enemy = new Enemy(50, 145, 120);
var enemy1 = new Enemy(-50, 220, 175);
var enemy2 = new Enemy(35, 75, 225);
var enemy3 = new Enemy(75, 75, 245);
var enemy4 = new Enemy(-50, 220, 175);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies=[];

allEnemies.push(enemy);
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);

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
