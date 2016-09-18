'use strict'

var app = app || {};

app.Button = function(){

	function Button(x, y, width, height, text, stage){
		PIXI.Graphics.call(this);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.text = text;
		this.upColour = 0xFF0000;
		this.overColour = 0x00FF00;
		this.downColour = 0x0000FF;

		var text = new PIXI.Text(""+this.text, {font:"50px Arial", fill:"white"});
		text.position.x = 10;
		text.position.y = 20;
		this.addChild(text);

		this.lineStyle(2, 0xFF00FF, 1);
		this.beginFill(0xFF00BB, 0.25);
		this.drawRoundedRect(0, 0, 300, 100, 15);
		this.endFill(); 
		this.position.y = this.y;
		this.position.x = this.x;
		this.interactive = true;
		this.buttonMode = true;
		//Restarting
		this.mousedown = function(mouseData){			
			for (var i = stage.children.length - 1; i >= 0; i--) {	stage.removeChild(stage.children[i]);
                    }
                }
	};

	Button.prototype = Object.create(PIXI.Graphics.prototype);
	Button.prototype.constructor = Button;

	return Button;
}();