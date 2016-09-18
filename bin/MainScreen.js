'use strict'

var app = app || {};

app.MainScreen = {

	init: function(stage){

		var textOptions = {
		    font: "90px Arial",
		    fill: '#3498db', // Set fill color to blue
		    align: 'center', // Center align the text, since it's multiline
		    stroke: '#34495e', // Set stroke color to a dark blue-gray color
		    strokeThickness: 20, // Set stroke thickness to 20
		    lineJoin: 'round' // Set the lineJoin to round instead of 'miter'
		}
		// Create middleText with the textOptions. Use \n to make the line break
		//var middleText = new PIXI.Text('Start Playing\nThe Game', textOptions);
		var text = new PIXI.Text('Pool Hopper!', textOptions);
		//text.anchor = .5;
		text.position.x = 180;
		text.position.y = 50;
		stage.addChild(text);


		console.log("MainScreen: init");
		this.playButton = new app.Button(300, 200, 50, 50, "Play");
		this.playButton.mousedown = function(mouseData){
			app.Game.changeState("GAME_SCREEN");
		}
		stage.addChild(this.playButton);

		console.log("MainScreen: init");
		this.creditsButton = new app.Button(300, 350, 50, 50, "Credits");
		this.creditsButton.mousedown = function(mouseData){
			//app.Game.changeState("GAME_SCREEN");
			console.log("Thanks for playing!");
		}
		stage.addChild(this.creditsButton);

	},

	update: function(){		
		//app.Game.changeState("GAME_OVER_SCREEN");
		//app.Game.changeState("GAME_SCREEN");
		console.log("MainScreen: update");
	},

	exit: function(){
		console.log("MainScreen: exit");
	}
};