CHARACTER_SIZE = 120;
B_SIZE = 1000;
MILLISECONDS_PER_FRAME = 500;
NUM_FRAMES = 2;
B_NUM_FRAMES = 21;


var canvas = document.getElementById("myCanvas");
var character = document.getElementById("character");
var background = document.getElementById("background");
var ctx = canvas.getContext("2d");
var char_x = 0;
var char_y = 0;
var movingLeft = false, movingRight = false, movingUp = false, movingDown = false;
var dir = "right";
var frame = 0;
b_frame = 0;
var speed = 1;
var x_distance = 0; //displacement from start
