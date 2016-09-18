'use strict'

var app = app || {};


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
                this.g = new PIXI.Rectangle(40,40,100,100);
                this.walls = [];
                this.wallBuilder();
                //console.log(this.walls[0].x);
            
	},


	update: function(){
		console.log("Game Screen: update");
		
		//Ai movement
		for(var i = 0; i < app.people.length; i++){
			app.people[i].moveAI(this.player.graphic.position.x, this.player.graphic.position.y);
		}
		this.movePlayer();
		//this.npc.graphic.position.x++;
		//this.npc.move();
		//console.log("GameScreen: update");
                if(this.poolHitCheck())
                    console.log("hit");
                else
                    console.log("not hit");
                if(this.peopleHitCheck()){
                    console.log("HIT BY PEOPLE");
                } else {
                    console.log("not hit");
                }
                
                if(this.wallHitCheck(this.walls)){
                    console.log("HIT BY walls");
                } else {
                    console.log("not hit");
                }
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

			if(this.player.v >= this.player.MAX){

				if(this.player.graphic.scale.x > 0.3){
					this.player.graphic.scale.x = this.player.graphic.scale.y -= 0.02;
				}else{
					this.player.isAir = false;
				}

			}else{
				this.player.graphic.scale.x = this.player.graphic.scale.y += 0.02;
				this.player.v += 0.02;
			}
      		this.player.t2++;
			//this.player.graphic.scale.x = this.player.graphic.scale.y += this.player.v;
		}

		// Player is jumping!
		if(app.Game.keyboard["SPACE"]){

			if(!this.player.isAir){

				this.player.isAir = true;
				this.player.v = 0;
				this.player.t1 = this.player.t2 = 0;
				console.log("JUMPING!");
			}
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
	},
		
	
        
        poolHitCheck: function(){
            app.poolData = {
                p_array: [
                    [50,50,50,50],
                ]
            };       
            var b = false;
            for(var i = 0, len = app.poolData.p_array.length; i < len; i++){
                this.g = new PIXI.Rectangle(app.poolData.p_array[i][0],app.poolData.p_array[i][1],app.poolData.p_array[i][2],app.poolData.p_array[i][3]);
               if(app.HitDetection.HIT(this.player.graphic, this.g))
                   return true;
            }
            return b;
        },
        
        peopleHitCheck: function(){
             
            var b = false;
            for(var i = 0, len = app.people.length; i < len; i++){
                
               if(app.HitDetection.HIT(this.player.graphic, app.people[i].graphic))
                   return true;
            }
            return b;
        },
        
        wallBuilder: function(){
            app.wallData = {
                w_array: [102 * 2, 102 * 2, 102 * 2, 102 * 2, 102 * 2],
                y_array: [
                    [
                            [0 * 2, 90 * 2],
                            [0 * 2, 90 * 2],
                            [0 * 2, 90 * 2],
                            [0 * 2, 90 * 2],
                            [0 * 2, 90 * 2],
                    ],
                    [
                            [90 * 2, 90 * 2],
                            [90 * 2, 90 * 2],
                            [90 * 2, 90 * 2],
                            [90 * 2, 90 * 2],
                            [90 * 2, 90 * 2],
                    ],
                    [
                            [180 * 2, 90 * 2],
                            [180 * 2, 90 * 2],
                            [180 * 2, 90 * 2],
                            [180 * 2, 90 * 2],
                            [180 * 2, 90 * 2],
                    ], 
                    [
                            [270 * 2, 90 * 2],
                            [270 * 2, 90 * 2],
                            [270 * 2, 90 * 2],
                            [270 * 2, 90 * 2],
                            [270 * 2, 90 * 2],



                    ]
                ],
            

            };
            
            //build horizontal walls
            
            var x = 0;
            for(var i = 0, len = app.wallData.y_array.length; i < len ; i++){
                for(var j = 0, len2 = app.wallData.w_array.length; j < len2; j++){
                    
                    this.walls.push(new PIXI.Rectangle(x, app.wallData.y_array[i][j][0], app.wallData.w_array[j]),  2);
                    x = x + app.wallData.w_array[j];
                }
                x = 0;
            }
            
            //build verticle walls
            var x = 0;
            for(var i = 0, len = app.wallData.y_array.length; i < len ; i++){
                for(var j = 0, len2 = app.wallData.w_array.length; j < len2; j++){
                    this.walls.push(new PIXI.Rectangle(x, app.wallData.y_array[i][j][0], 2, app.wallData.y_array[i][j][1]));
                    x = x + app.wallData.w_array[j];
                }
                x = 0;
            }
                
               
            
            
        },
        
        wallHitCheck: function(theWalls){
            var b = false;
            
            for(var i = 0, len = theWalls.length; i < len; i++){
                //console.log(this.walls);
               if(app.HitDetection.HIT(this.player.graphic, theWalls[i]))
                   return true;
            }
            return b;
	},

		

};