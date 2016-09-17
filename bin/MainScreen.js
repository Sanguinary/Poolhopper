'use strict'

var app = app || {};

app.MainScreen = {

	init: function(){
		console.log("MainScreen: init");
	},

	update: function(){
		app.Game.changeState("GAME_SCREEN");
		console.log("MainScreen: update");
	},

	exit: function(){
		console.log("MainScreen: exit");
	}
};