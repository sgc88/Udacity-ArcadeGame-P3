// Enemies our player must avoid

'use strict';
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
// having bad guys move between range of speed
if(this.x > 515){
  this.x = Math.floor(Math.random() * -10);
  this.speed = getRandomInt(80, 250);
}

if (player.x < this.x + 40 &&
    player.x + 40 > this.x &&
    player.y < this.y + 30 &&
    30 + player.y > this.y) {
    player.x = 202;
    player.y = 405;
};

};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Treasure = function(x, y, sprite){
  this.x = x;
  this.y = y;
  this.sprite = sprite;

};


Treasure.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Treasure.prototype.update = function(){

};

var treasure = new Treasure(200, 70, 'images/Star.png');
var treasure1 = new Treasure(0, 250, 'images/Heart.png');
var treasure2 = new Treasure(400, 150, 'images/Gem-Green.png');
var treasure3 = new Treasure(100, 150, 'images/Gem-Blue.png');
var treasure4 = new Treasure(300, 70, 'images/Gem-Orange.png');



var totalTreasures = [];

totalTreasures.push(treasure);
totalTreasures.push(treasure1);
totalTreasures.push(treasure2);
totalTreasures.push(treasure3);
totalTreasures.push(treasure4);


// Now write your own player class
var Player = function(){
  this.sprite = 'images/char-princess-girl.png';
  this.x = 210;
  this.y = 400;


}

//rendering our player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


}

Player.prototype.update = function(dt) {

}


Player.prototype.checkTreasure = function() {
  console.log("checkTreasure triggered.");
  for(var i = 0; i < totalTreasures.length; i++) {
    if(
      // totalTreasures[i].x === this.x && totalTreasures[i].y === this.y
      this.x < totalTreasures[i].x + 50 && 
      this.x + 50 > totalTreasures[i].x &&
      this.y < totalTreasures[i].y + 40 &&
      40 + this.y > totalTreasures[i].y
    ) {
      counter += 20;
      this.y = -10;

      // take the gem away if player gets the point
      totalTreasures.splice(i, 1);


    }
    //when the player wins
    if(counter >= 100){
        this.x = 210;
        this.y = 400;
        alert("Great Job!");
        counter = 0;
        reset();
    }
  }
}
var winner= true;
var counter = 0;
// our player moves up, down, right and left
Player.prototype.handleInput = function(keyPress) {
       //check to see if the player gets the gem for an extra points
      this.checkTreasure();
      // moves to left
      if (keyPress == 'left' && this.x > 0) {
          this.x -= 100;
      };
      // the good guy should stay in canvas when it moves all the way to left
      if(keyPress == 'left' && this.x < 15){
        this.x = 15;
      };
      // the good guy moves to right with right arrow by 100 per/ press
      if(keyPress == 'right' && this.x > 0){
        this.x += 100;
      };
      //the good guy stops moving to the right when it reaches to the  edge.
      if(keyPress == 'right' && this.x >410){
        this.x = 410;
      };
      //moves up with up arrow 80 per/ press
      if(keyPress == 'up' && this.y > 0){
        this.y -= 80;
      };
      // moves down with down arrow 80 per/ press
      // stops moving down when it reaches 405
      if(keyPress == 'down' && this.y < 405){
        this.y += 80;
      };
      //it stops moving down when it reaches 400 and stays on the canvas
      if(keyPress == 'down' && this.y >400){
        this.y = 400;
      };
      //once the good guy reaches the water when we have a winner!
      //it will reset the game and the good guy will go its start position

         if(this.y < 80) {
      setTimeout(()=> {
        this.x = 210;
        this.y = 400;
        winner = true;
      }, 500);
      counter ++ ;
      document.getElementById('score').innerHTML = 'Score: '+ counter;
  
      }

}

// This class requires an update(), render() and
// a handleInput() method.


var enemy = new Enemy(-80, 145, 120);
var enemy1 = new Enemy(-100, 220, 175);
var enemy2 = new Enemy(-90, 75, 225);
var enemy3 = new Enemy(-85, 75, 245);
var enemy4 = new Enemy(-95, 220, 175);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies=[];

allEnemies.push(enemy);
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);



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


//pick the player form players list with clicking on it
const pickPlayer = document.querySelector(".players");

pickPlayer.addEventListener('click', function(event){
 var x = event.target.parentElement;

 player.sprite = x.firstElementChild.getAttribute('src');

 console.log(player.sprite);
 
});
//Reset the game when there is a winner or whenever we want to



function reset(){
    //player gets back its first position 
    player.render();
    //diplay gems on canvas
    totalTreasures.push(treasure);
    totalTreasures.push(treasure1);
    totalTreasures.push(treasure2);
    totalTreasures.push(treasure3);
    totalTreasures.push(treasure4);
    //score sets to 0
    document.getElementById('score').innerHTML = 'Score: 0';
}












