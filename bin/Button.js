'use strict'

var app = app || {};

app.Button = function(){

	function Button(x, y, width, height){
		PIXI.Graphics.call(this);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.text = "Default string";
		this.upColour = 0xFF0000;
		this.overColour = 0x00FF00;
		this.downColour = 0x0000FF;

		this.lineStyle(2, 0xFF00FF, 1);
		this.beginFill(0xFF00BB, 0.25);
		this.drawRoundedRect(150, 450, 300, 100, 15);
		this.endFill(); 
		this.interactive = true;
		this.buttonMode = true;
		this.mousedown = function(mouseData){

   			console.log("MOUSE DOWN!");
		}
	};

	Button.prototype = Object.create(PIXI.Graphics.prototype);
	Button.prototype.constructor = Button;

	return Button;
}();