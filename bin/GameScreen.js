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
                if(this.poolHitCheck())
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
	},
        
        poolHitCheck: function(){
            app.poolData = {
                p_array: [
                    [40, 20, 20, 80],
                    [80, 20, 20, 80],
                    [40, 40, 60, 20],
                    [160, 20, 20, 80],
                    [160, 55, 60, 15],
                    [160, 20, 60, 15],
                    [160, 90, 60, 15],
                    [280, 20, 20, 80],
                    [280, 90, 60, 15],
                    [400, 20, 20, 80],
                    [400, 90, 60, 15],
                    [400, 140, 20, 80],
                    [400, 210, 60, 15],
                    [280, 210, 60, 15],
                    [280, 130, 60, 15],
                    [280, 130, 20, 80],
                    [320, 130, 20, 80],
                    [160, 210, 60, 15],
                    [160, 130, 60, 15],
                    [160, 130, 20, 80],
                    [200, 130, 20, 80],
                    [40, 140, 20, 80],
                    [60, 140, 40, 40],
                    [280, 290, 30, 30],
                    [160, 290, 30, 30],
                    [40, 290, 30, 30],
                ]
            };       
            var b = false;
            for(var i = 0, len = app.poolData.p_array.length; i < len; i++){
                this.g = new PIXI.Rectangle(app.poolData.p_array[i][0],app.poolData.p_array[i][1],app.poolData.p_array[i][2],app.poolData.p_array[i][3]);
               if(app.HitDetection.HIT(this.player.graphic, this.g))
                   return true;
            }
            return b;
        }
};