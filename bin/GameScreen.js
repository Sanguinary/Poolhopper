'use strict'

var app = app || {};

app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		console.log(this.testButton);
		stage.addChild(this.testButton);
		console.log("GameScreen: init");
		//Person();
		//window.addEventListener("keypress", );
	},

	update: function(){
		console.log("GameScreen: update");
	},

	exit: function(){
		console.log("GameScreen: exit");
	}
};