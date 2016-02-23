var pg = document.getElementById("playground");
var ctx = pg.getContext("2d");

var radius = 1;
var growing = true;
var requestID;

var drawDot = function drawDot() {
   	if (radius >= Math.max(pg.width/2, pg.height/2)) { growing = false; }
	else if (radius <= 0) { growing = true; }

	if (growing) { radius += 1; }
    else { radius -= 1; }

	console.log("drawing");
    ctx.clearRect( 0, 0, pg.width, pg.height );
	ctx.beginPath();
	ctx.fillStyle = "#2CF";
	ctx.arc( pg.width/2, pg.height/2, radius, 0, 2*Math.PI );
	ctx.fill();

	requestID = window.requestAnimationFrame(drawDot);
}

var button = document.getElementById("circle");
button.addEventListener( "click", drawDot );

var stop = document.getElementById("stop");
stop.addEventListener( "click", function() {
   window.cancelAnimationFrame(requestID);
});   
