setInterval(draw, MILLISECONDS_PER_FRAME);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, col*background.width/NUM_COLS, row*background.height/NUM_ROWS,
                background.width/NUM_COLS, background.height/NUM_ROWS, 0, 0, B_SIZE, B_SIZE);
  col++;
  if(col==NUM_COLS){
    row++;
    col = 0;
  }
  if(row==NUM_ROWS){
    console.log("done!");
    row = 0;
    col = 0;
  }
}
