/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var FRAME_RATE = 60;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40
  };
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  };
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp) 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
   redrawGameItem();
  }

  function handleKeyUp(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      walker.speedX = 0
      console.log ("left pressed")
    }if (event.which === KEY.RIGHT) {
      walker.speedX = 0
      console.log ("right pressed")
    }if (event.which === KEY.UP) {
      walker.speedY = 0
      console.log ("up pressed")
    }if (event.which === KEY.DOWN) {
      walker.speedY = 0
      console.log ("down pressed")
    }
  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      walker.speedX = -5
      console.log ("left pressed")
    }else if (event.which === KEY.RIGHT) {
      walker.speedX = 5
      console.log ("right pressed")
    } else if (event.which === KEY.UP) {
      walker.speedY = -5
      console.log ("up pressed")
    } else if (event.which === KEY.DOWN) {
      walker.speedY = 5
      console.log ("down pressed")
    }
  }
// press the up key --> accelerate the box in negative Y direct and positive
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  walker.positionX += walker.speedX;
  walker.positionY += walker.speedY; // update the position of the box along the x-axis
}

function redrawGameItem(){
  $("#walker").css("left", walker.positionX)
  $("#walker").css("top", walker.positionY) // draw the box in the new location, positionX pixels away from the "left"
}
  function wallCollision(){
    if (walker.positionX > 390) {
      walker.positionX = 390
    } else if (walker.positionY > 390) {
      walker.positionY = 390
    } else if (walker.positionX < 0) {
      walker.positionX = 0
    }else if (walker.positionY < 0) {
      walker.positionY = 0
    }
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
