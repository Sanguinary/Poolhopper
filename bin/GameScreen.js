'use strict'

var app = app || {};

app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		//console.log(this.testButton);
		//stage.addChild(this.testButton);
		this.player = new app.Player();
		this.npc = new app.NPC();
		window.addEventListener("keypress", this.handleKeys.bind(this), true);
	},

	update: function(){
		console.log("Game Screen: update");
		//this.npc.graphic.position.x++;
		//this.npc.move();
		this.npc.moveAI();
		//console.log("GameScreen: update");
	},

	exit: function(){
		console.log("GameScreen: exit");
	},

	handleKeys: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 100){
			//console.log("wut wut wut");
			this.player.graphic.position.x += this.player.speed;
			//this.player.graphic.body.rotation += 0.1; 
		}
		if(e.keyCode === 115){
			this.player.graphic.position.y += this.player.speed;
		}
		if(e.keyCode === 119){
			this.player.graphic.position.y -= this.player.speed;
		}
		if(e.keyCode === 97){
			this.player.graphic.position.x -= this.player.speed;
		}
	}
};