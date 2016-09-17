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
	};

	Button.prototype = Object.create(PIXI.Graphics.prototype);
	Button.prototype.constructor = Button;

	var p = Button.prototype;

	return Button;
}();