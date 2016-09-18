'use strict'

var app = app || {};


app.GameOver = {

	init: function(stage){

		var text = new PIXI.Text('GAME OVER',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
		text.anchor = .5;
		stage.addChild(text);
		this.testButton = new app.Button(10, 10, 50, 50);
		stage.addChild(this.testButton);
		
	},

	update: function(){
		console.log("Game Over");
	},

	exit: function(){
		console.log("GameOver: exit");
	},
};