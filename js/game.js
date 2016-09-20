setInterval(draw, MILLISECONDS_PER_FRAME);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(movingLeft)
    moveLeft();
  if(movingRight)
    moveRight();
  if(movingUp)
    moveUp();
  if(movingDown)
    moveDown();

  ctx.drawImage(character, frame*character.width/NUM_FRAMES, 0,
                character.width/NUM_FRAMES, character.height, char_x, char_y,
                CHARACTER_SIZE, CHARACTER_SIZE);
}

//start moving
document.addEventListener("keypress", function(e){

  switch(e.key){
    case 'a':
      movingLeft = true;
      break;
    case 'd':
      movingRight = true;
      break;
    case 'w':
      movingUp = true;
      break;
    case 's':
      movingDown = true;
      break;
    default: break;
  }
});

//stop moving
document.addEventListener("keyup", function(e) {
  switch(e.key){
    case 'a':
      movingLeft = false;
      break;
    case 'd':
      movingRight = false;
      break;
    case 'w':
      movingUp = false;
      break;
    case 's':
      movingDown = false;
      break;
    default: break;
  }
});

/* move functions */
function moveLeft() {
  dir="left";
  if(x_distance<=0)
    return;
  if(char_x<canvas.width/3 && !(x_distance<=canvas.width/3)){
    shiftBackgroundObjects("right");
  }
  else{
    char_x -=speed*5;
  }
  x_distance-=speed*5;
  updateFrame();
}

function moveRight() {
  dir="right";
  if(char_x>2*canvas.width/3){
    shiftBackgroundObjects("left");
  }
  else{
    char_x+=speed*5;
  }
  x_distance+=speed*5;
  updateFrame();
}

function moveUp() {
  if(char_y<0)
    return;
  char_y-=speed*5;
  updateFrame();
}

function moveDown() {
  if(char_y+CHARACTER_SIZE>canvas.height)
    return;
  char_y+=speed*5;
  updateFrame();
}

/*this method shifts all background objects (background and enemies) in
  the opposite direction the character is moving, so that it appears the
  character continues to move when in fact the character remains in the
  same place on the screen */
function shiftBackgroundObjects(direction){
  switch (direction) {
    case "right":
      /*background_x+=speed*5;
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].x+=speed*5;
      }*/
      break;
    case "left":
      /*background_x-=speed*5;
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].x-=speed*5;
      }*/
      break;
    default: break;

  }
}

//set the character animation to the next frame
function updateFrame(){
  /*if(dir=="left"){
    frame+=1;
    if(frame>(NUM_FRAMES-1)/2)
      frame=0;
  }
  if(dir=="right"){
    frame+=1;
    if(frame>NUM_FRAMES-1)
      frame=2;
    }*/
  frame+=1;
  if(frame>NUM_FRAMES-1)
    frame=0;
}
