var pg = document.getElementById("playground");
var ctx = pg.getContext("2d");

var drawDot = function() {
    ctx.clearRect( 0, 0, pg.width, pg.height );
    if (growing) { radius += 1; }
    else { radius -= 1; }
}
