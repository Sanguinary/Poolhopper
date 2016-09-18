'use strict'

var app = app || {};

app.MainScreen = {

	init: function(stage){
		console.log("MainScreen: init");
	},

	update: function(){		
		//app.Game.changeState("GAME_OVER_SCREEN");
		app.Game.changeState("GAME_SCREEN");
		console.log("MainScreen: update");
	},

	exit: function(){
		console.log("MainScreen: exit");
	}
};