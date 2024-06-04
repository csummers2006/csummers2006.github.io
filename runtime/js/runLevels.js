var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createsawblade(x, y){
    var hitZone = 25;
    var damageFromObstacle = 10;
    var sawblade = game.createObstacle(hitZone, damageFromObstacle);

    sawblade.x = x;
    sawblade.y = y;

    sawblade.x = 600; 
    sawblade.y = groundY -50;
    game.addGameItem(sawblade);
    var sawbladeImage = draw.bitmap("img/sawblade.png");
    sawblade.addChild(sawbladeImage);
    sawbladeImage.x = -hitZone;
    sawbladeImage.y = -hitZone;
    }
    createsawblade(600, groundY - 50);
    createsawblade(800, groundY -100);

    var emeny = game.createGameItem("enemy", 80);
    var lynel = draw.bitmap("img/enemy.png");
    lynel.x -= 80;
    lynel.y -= 80;

    enemy.addChild(lynel);
    enemy.x = 800;
    enemy.y = groundY - 200;
    
    game.addGameItem(enemy);

  function createEnemy (x, y)

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
