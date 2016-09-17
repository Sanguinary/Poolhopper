'use strict'

var app = app || {};

app.GameScreen = {

	testButton: undefined,
	
	init: function(){
		// testButton = new app.Button();
		//TEST: this.temp = app.Person.makePerson(0xff0000, 0x0040ff, stage);

		console.log("GameScreen: init");
	},

	update: function(){
		console.log("GameScreen: update");
	},

	exit: function(){
		console.log("GameScreen: exit");
	}
};