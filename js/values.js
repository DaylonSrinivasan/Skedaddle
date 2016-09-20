CHARACTER_SIZE = 120;
MILLISECONDS_PER_FRAME = 30;
NUM_FRAMES = 2;


var canvas = document.getElementById("myCanvas");
var character = document.getElementById("character");
var ctx = canvas.getContext("2d");
var char_x = 0;
var char_y = 0;
var movingLeft = false, movingRight = false, movingUp = false, movingDown = false;
var dir = "right";
var frame = 0;
var speed = 1;
var x_distance = 0; //displacement from start
