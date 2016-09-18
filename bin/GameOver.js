'use strict'

var app = app || {};


app.GameOver = {

	init: function(stage){

		console.log("HERE");
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