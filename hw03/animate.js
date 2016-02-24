var pg = document.getElementById("playground");
var ctx = pg.getContext("2d");

var requestID;
var logoOn = false;

// global circle variables
var radius = 1;
var growing = true;

var drawDot = function drawDot() {
	//console.log("drawing dot");
   	if (radius >= Math.max(pg.width/2, pg.height/2)) { growing = false; }
	else if (radius <= 0) { growing = true; }

	if (growing) { radius += 1; }
    else { radius -= 1; }

    ctx.clearRect( 0, 0, pg.width, pg.height );
	ctx.beginPath();
	ctx.fillStyle = "#2CF";
	ctx.arc( pg.width/2, pg.height/2, radius, 0, 2*Math.PI );
	ctx.fill();

	requestID = window.requestAnimationFrame(drawDot);
};

// global logo variables
var logo = new Image();
logo.src = "trump.jpg"
var logoWidth = 150;
var logoHeight = 100; 
var logoX = 0;
var logoY = 0;
var incX = true;
var incY = true;

var drawLogo = function drawLogo() {
	//console.log("drawing logo");
	if (logoX >= pg.width - logoWidth) { incX = false; }
	else if (logoX < 0) { incX = true; }
	if (logoY >= pg.height - logoHeight) { incY = false; }
	else if (logoY < 0) { incY = true; }

	if (incX) { logoX += 1; }
	else { logoX -= 1; }
	if (incY) { logoY += 1; }
	else { logoY -= 1; }

	ctx.clearRect( 0, 0, pg.width, pg.height );
	ctx.beginPath();
	console.log(logoX + " " + logoY);
	ctx.drawImage( logo, logoX, logoY, logoWidth, logoHeight );

	requestID = window.requestAnimationFrame(drawLogo);
};

var circleB = document.getElementById("circle");
circleB.addEventListener( "click", drawDot );

var stopB = document.getElementById("stop");
stopB.addEventListener( "click", function() {
   window.cancelAnimationFrame(requestID);
});   

var logoB = document.getElementById("logo");
logoB.addEventListener( "click", drawLogo );
