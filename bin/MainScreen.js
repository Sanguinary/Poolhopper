'use strict'

var app = app || {};

app.MainScreen = {

	init: function(stage){


		var text = new PIXI.Text('Pool \n      Hopper!',{fontFamily : 'Arial', fontSize: 72, fill : 0xff1010, align : 'center'});
		//text.anchor = .5;
		stage.addChild(text);

		console.log("MainScreen: init");
		this.playButton = new app.Button(300, 200, 50, 50, "Play");
		this.playButton.mousedown = function(mouseData){
			app.Game.changeState("GAME_SCREEN");
		}
		stage.addChild(this.playButton);


		console.log("MainScreen: init");
		this.creditsButton = new app.Button(300, 350, 50, 50, "Credits");
		stage.addChild(this.creditsButton);
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