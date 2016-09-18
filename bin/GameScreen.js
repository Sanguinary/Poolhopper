'use strict'

var app = app || {};


app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		//console.log(this.testButton);
		//stage.addChild(this.testButton);
		this.player = new app.Player();
		this.npc = new app.NPC();
		window.addEventListener("keydown", this.handleKeysDown.bind(this), true);
		window.addEventListener("keyup", this.handleKeysUp.bind(this), true);
                this.g = new PIXI.Rectangle(40,40,100,100);
            
	},

	update: function(){
		console.log("Game Screen: update");
		//this.npc.graphic.position.x++;
		//this.npc.move();
		this.movePlayer();
		this.npc.moveAI();
		//console.log("GameScreen: update");
                if(app.HitDetection.HIT(this.player.graphic , this.g))
                    console.log("hit");
                else
                    console.log("not hit");
	},

	exit: function(){
		console.log("GameScreen: exit");
	},

	movePlayer: function(){

		if(app.Game.keyboard["W"]){
			//console.log("AHHHHH");
			this.player.graphic.position.y -= this.player.speed;
		}else if(app.Game.keyboard["S"]){
			//console.log("brrrrrr");
			this.player.graphic.position.y += this.player.speed;
		}

		if(app.Game.keyboard["D"]){
			this.player.graphic.position.x += this.player.speed;
		}else if(app.Game.keyboard["A"]){
			this.player.graphic.position.x -= this.player.speed;
		}

		//player is in air
		if(this.player.isAir){

      		this.player.t2++;
			//this.player.graphic.scale.x = this.player.graphic.scale.y += this.player.v;
		}

		// Player is jumping!
		if(app.Game.keyboard["SPACE"]){

			if(!this.player.isAir){

				this.player.isAir = true;
				this.player.t1 = this.player.t2 = 0;
				console.log("JUMPING!");
			}
			this.player.graphic.scale.x = this.player.graphic.scale.y += ((this.player.t1-this.player.t2) + 40);
		}
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
		if(e.keyCode === 32){
			app.Game.keyboard["SPACE"] = true;
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
		if(e.keyCode === 32){
			app.Game.keyboard["SPACE"] = false;
		}
	}
};