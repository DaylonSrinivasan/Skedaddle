<!DOCTYPE html>
<html lang=en>

<head>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

</head>

<body>
  <div ng-app="app">
    <img id="background" width="21000" height="1000" src="images/background.png" hidden>
    <canvas id="myCanvas" style="width:100%" width="1000" height="1000">
      style="border:1px solid #d3d3d3;">
      Your browser does not support the HTML5 canvas tag.
    </canvas>
    <script type="text/javascript" src="js/values.js"></script>
    <script type="text/javascript" src="js/game.js"></script>
  </div>
</body>
</html>
