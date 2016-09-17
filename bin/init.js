'use strict'

//Globals will be the stage which is the parrent of all graphics, canvas object for resizing and the renderer which is pixi.js framebuffer.
var stage = new PIXI.Container();;
var canvas = document.getElementById("game");;
var renderer = PIXI.autoDetectRenderer(1024, 570, {view:document.getElementById("game")} );
var graphics = new PIXI.Graphics();

// Create or grab the application
var app = app || {};

function init(){
        resize();
        renderer = PIXI.autoDetectRenderer(1024, 570, {view:document.getElementById("game")} );
        renderer.backgroundColor = 0x50503E;
        canvas.focus();

        app.Game.init(renderer, window, canvas, stage);
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

//Creates a person
function makePerson(){
	var head = new PIXI.Graphics();	
	var body = new PIXI.Graphics();
	var personCon = new PIXI.Container();

	head.lineStyle(2, 0x000000);
	head.beginFill(0xFFFF08, 0.5);
	head.drawCircle(100, 50, 30);
	head.endFill();

	body.lineStyle(2, 0x000000);
	body.beginFill(0xff0000, 0.5);
	body.drawEllipse(100, 50, 100, 50);
	body.endFill();

	personCon.addChild(body);
	personCon.addChild(head);
	stage.addChild(personCon);
}

//takes two arrays
// the w_array is an array of column width values [w1, w2, w3, ...], y_array is 
//3d array setup as such [[row 1], [row 2], [row3]] and the rows are arrays
// that contain pairs of y,l values where y is the fixed corner of the 
//rectangle and L is the height of the rectangle.
function level(w_array, y_array){
    
    // drawRect( xstart, ystart, x size side, y size side)

    // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x995702, 1);
    graphics.beginFill(0x71FF33, 1);
    
    var x = 0;
    //reset the x
    x = 0;
    //post fence post
    for(h = 0, hlen = y_array.length; h < hlen; h++){
        for(i = 0, len = w_array.length; i < len; i++){
            //setup the y value
            graphics.drawRect(x, y_array[h][i][0], w_array[i], y_array[h][i][1]);
            x += w_array[i];   
        }
        //reset the x
        x = 0;
    }
    
    stage.addChild(graphics);
}


window.addEventListener('resize', resize, false);
window.addEventListener('orientationchange', resize, false);
