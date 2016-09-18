'use strict'

var app = app || {};
var graphics = new PIXI.Graphics();
app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		//console.log(this.testButton);
		//stage.addChild(this.testButton);
		this.player = new app.Player();
		app.people = [];

		//Create array of npcs
		for(var i = 0; i < 5; i++){
			app.people.push(new app.NPC());
			app.people[i].graphic.position.y += i*100;
		}
		//this.npc = new app.NPC();
		window.addEventListener("keydown", this.handleKeysDown.bind(this), true);
		window.addEventListener("keyup", this.handleKeysUp.bind(this), true);
                this.g =graphics.drawRect(40,40,40,40);
	},


	update: function(){
		console.log("Game Screen: update");
		
		//Ai movement
		for(var i = 0; i < app.people.length; i++){
			app.people[i].moveAI(this.player.graphic.position.x, this.player.graphic.position.y);
		}
		//this.npc.graphic.position.x++;
		//this.npc.move();
		//console.log("GameScreen: update");
                if(app.HitDetection.Hit(this.player.graphic , this.g));
                    console.log("hit");
	},

	exit: function(){
		console.log("GameScreen: exit");
	},

	
	handleKeysDown: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 87){
			app.Game.keyboard["W"] = true;
		}
		if(e.keyCode === 83){
			app.Game.keyboard["S"] = true;
		}
		if(e.keyCode === 68){
			app.Game.keyboard["D"] = true;
		}
		if(e.keyCode === 65){
			app.Game.keyboard["A"] = true;
		}
	},

	handleKeysUp: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 87){
			app.Game.keyboard["W"] = false;
		}
		if(e.keyCode === 83){
			app.Game.keyboard["S"] = false;
		}
		if(e.keyCode === 68){
			app.Game.keyboard["D"] = false;
		}
		if(e.keyCode === 65){
			app.Game.keyboard["A"] = false;
		}
	}
};