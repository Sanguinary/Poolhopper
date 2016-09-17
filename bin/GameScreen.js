'use strict'

var app = app || {};

app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		//console.log(this.testButton);
		//stage.addChild(this.testButton);
		this.player = new app.Player();
		window.addEventListener("keypress", this.handleKeys.bind(this), true);
	},

	update: function(){
		console.log("GameScreen: update");
	},

	exit: function(){
		console.log("GameScreen: exit");
	},

	handleKeys: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 68){
			//console.log("wut wut wut");
			this.player.graphic.position.x+=5;
		}
		if(e.keyCode === 83){
			this.player.graphic.position.y+=5;
		}
		if(e.keyCode === 87){
			this.player.graphic.position.y-=5;
		}
		if(e.keyCode === 65){
			this.player.graphic.position.x-=5;
		}
	}
};