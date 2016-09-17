

//Globals will be the stage which is the parrent of all graphics, canvas object for resizing and the renderer which is pixi.js framebuffer.
var stage = new PIXI.Container();;
var canvas = document.getElementById("game");;
var renderer = PIXI.autoDetectRenderer(1024, 570, {view:document.getElementById("game")} );

function init(){
        resize();
        renderer = PIXI.autoDetectRenderer(1024, 570, {view:document.getElementById("game")} );
        renderer.backgroundColor = 0x50503E;
        canvas.focus();
        //setup();
        update();
}

function resize(){
	var gameWidth = window.innerWidth;
	var gameHeight = window.innerHeight;
	var scaleToFitX = gameWidth / 1000;
	var scaleToFitY = gameHeight / 500;
	// Scaling statement belongs to: https://www.davrous.com/2012/04/06/modernizing-your-html5-canvas-games-part-1-hardware-scaling-css3/
	var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
	var currentScreenRatio = gameWidth / gameHeight;
	if(currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79) {
		canvas.style.width = gameWidth + "px";
		canvas.style.height = gameHeight + "px";
	}else{
		canvas.style.width = 1000 * optimalRatio + "px";
		canvas.style.height = 500 * optimalRatio + "px";
	}
}

// Main Game loop.
function update(){
	renderer.render(stage);
	requestAnimationFrame(update);
}

window.addEventListener('resize', resize, false);
window.addEventListener('orientationchange', resize, false);