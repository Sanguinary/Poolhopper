'use strict'

var app = app || {};

app.GameScreen = {

	testButton: undefined,

	init: function(){
		// testButton = new app.Button();
		console.log("GameScreen: init");
	},

	update: function(){
		console.log("GameScreen: update");
	},

	exit: function(){
		console.log("GameScreen: exit");
	}
};