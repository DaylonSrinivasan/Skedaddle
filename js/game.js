//$(document).ready(function() {
  setInterval(draw, MILLISECONDS_PER_FRAME);

//});
function draw() {
  ctx.drawImage(background, col*background.width/NUM_COLS, row*background.height/NUM_ROWS,
                background.width/NUM_COLS, background.height/NUM_ROWS, 0, 0, B_SIZE, B_SIZE);
  if(!play){
    return;
  }
  //ctx.clearRect(0, 0, canvas.width, canvas.height);


  col++;
  if(col==NUM_COLS){
    row++;
    col = 0;
  }
  if(row==NUM_ROWS){
    pause();
  }
}

function start() {
  play = true;
}

function pause() {
  play = false;
}

function restart() {
  row = 0;
  col = 0;
  play = false;
}
