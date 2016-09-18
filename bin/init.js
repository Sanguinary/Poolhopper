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
        level();
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

//takes two arrays
// the w_array is an array of column width values [w1, w2, w3, ...], y_array is 
//3d array setup as such [[row 1], [row 2], [row3]] and the rows are arrays
// that contain pairs of y,l values where y is the fixed corner of the 
//rectangle and L is the height of the rectangle.
function level(){
    
    // drawRect( xstart, ystart, x size side, y size side)
    app.levelData = {
	w_array: [120, 120, 120, 120],
	y_array: [
		[
			[0, 120],
			[0, 120],
			[0, 120],
			[0, 120]
		],
		[
			[120, 120],
			[120, 120],
			[120, 120],
			[120, 120]
		],
		[
			[240, 120],
			[240, 120],
			[240, 120],
			[240, 120]
		]
	],
	p_array: [
		[40, 20, 20, 80],
		[80, 20, 20, 80],
                [40, 40, 60, 20],
                [160, 20, 20, 80],
                [160, 55, 60, 15],
                [160, 20, 60, 15],
                [160, 90, 60, 15],
                [280, 20, 20, 80],
                [280, 90, 60, 15],
                [400, 20, 20, 80],
                [400, 90, 60, 15],
                [400, 140, 20, 80],
                [400, 210, 60, 15],
                [280, 210, 60, 15],
                [280, 130, 60, 15],
                [280, 130, 20, 80],
                [320, 130, 20, 80],
                [160, 210, 60, 15],
                [160, 130, 60, 15],
                [160, 130, 20, 80],
                [200, 130, 20, 80],
                [40, 140, 20, 80],
		[60, 140, 40, 40],
                [280, 290, 30, 30],
                [160, 290, 30, 30],
                [40, 290, 30, 30],

                
	]
        };
    
    // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x995702, 1);
    graphics.beginFill(0x71FF33, 1);
    
    var x = 0;
    //reset the x
    x = 0;
    //post fence post
    for(var h = 0, hlen = app.levelData.y_array.length; h < hlen; h++){
        for( var i = 0, len = app.levelData.w_array.length; i < len; i++){
            //setup the y value
            graphics.drawRect(x, app.levelData.y_array[h][i][0], app.levelData.w_array[i], app.levelData.y_array[h][i][1]);
            x += app.levelData.w_array[i];   
        }
        //reset the x
        x = 0;
    }
    
    graphics.lineStyle(2, 0x3472D8, 1);
    graphics.beginFill(0x3472D8, 1);
    for(var i = 0, len = app.levelData.p_array.length; i < len; i++){
        graphics.drawRect(app.levelData.p_array[i][0], app.levelData.p_array[i][1],  app.levelData.p_array[i][2], app.levelData.p_array[i][3]);
        
    }
    
    stage.addChild(graphics);
}

// Reads in a JSON object with data
function readJSONFile( filePath ){
    $.getJSON( filePath, function(){} )
        .done( function( data ){
                console.log( "SUCCESS: File read from " + filePath );
                app.levelData = data;
        } )
        .fail( function( ){
                console.log( "FAILED: File at " + filePath );
        } );
}


window.addEventListener('resize', resize, false);
window.addEventListener('orientationchange', resize, false);
