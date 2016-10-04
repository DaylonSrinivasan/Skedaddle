<!DOCTYPE html>
<html lang=en>

<head>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

</head>

<body>
  <div ng-app="app">
    <img id="background" src="images/mediumbackground.png" hidden>
    <canvas  class="col-sm-9 col-lg-6" id="myCanvas" width="500" height="500">
      style="border:1px solid #d3d3d3;">
      Your browser does not support the HTML5 canvas tag.
    </canvas>
    <script type="text/javascript" src="js/values.js"></script>
    <script type="text/javascript" src="js/game.js"></script>

  </div>
  <div class="container" style="float:left">
    <button onclick="start()" type = "button" class = "btn btn-primary btn-md"> Play </button>
    <button onclick="pause()" type = "button" class = "btn btn-primary btn-md"> Pause </button>
    <button onclick="restart()" type = "button" class = "btn btn-primary btn-md"> Restart </button>
  </div>
</body>
</html>
