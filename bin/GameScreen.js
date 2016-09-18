'use strict'

var app = app || {};


app.GameScreen = {

	init: function(stage){
		this.testButton = new app.Button(10, 10, 50, 50);
		//console.log(this.testButton);
		//stage.addChild(this.testButton);
		this.player = new app.Player();
        this.player.graphic.position.x = 300;
        this.player.graphic.position.y = 300;

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

        this.score = 0;
        this.scoreText = new PIXI.Text("Score:" + this.score, {font:"50px Arial", fill:"red"});
        this.scoreText.position.y = 20;
        this.scoreText.position.x = 30;
        stage.addChild(this.scoreText);

        this.healthText = new PIXI.Text("100 / " + this.player.currentHealth, {font:"50px Arial", fill:"red"});
        this.healthText.position.y = 20;
        this.healthText.position.x = 720;
        stage.addChild(this.healthText);
        //console.log(this.walls[0].x);    
	},

	update: function(){
		//console.log("Game Screen: update");
		//Ai movement
		for(var i = 0; i < app.people.length; i++){
			app.people[i].moveAI(this.player.graphic.position.x, this.player.graphic.position.y, app.people);
		}
		this.movePlayer();
		//this.npc.graphic.position.x++;
		//this.npc.move();
		//console.log("GameScreen: update");
            

                if(this.poolHitCheck()){
                    console.log("hit");
                    if(!this.player.isWater){
                        this.player.isWater = true;
                    }
                    this.modScore(20);
                }else{
                    if(this.player.isWater){
                        this.player.isWater = false;
                    }
                    //console.log("not hit");
                }

            if(this.player.v <= 0.20){
                if(this.peopleHitCheck()){
                    //this.player.currentHealth -= 25;
                    console.log("Health removes: -" + 25);
                    this.modHealth(-25);
                    //console.log("HIT BY PEOPLE");
                } /*else {
                    console.log("not hit");
                }*/
                
                if(this.wallHitCheck(this.walls)){
                    console.log("HIT BY walls  " + this.player.v);
                    if(app.Game.keyboard["D"]){
                        this.player.graphic.position.x-=6;
                    } else if(app.Game.keyboard["A"]){
                        this.player.graphic.position.x+=6;
                    }
                    if(app.Game.keyboard["S"]){
                        this.player.graphic.position.y-=6;
                    }else if(app.Game.keyboard["W"]){
                        this.player.graphic.position.y+=6;
                    }
                } 
            }
	},

	exit: function(){
		console.log("GameScreen: exit");
	},
	
    modHealth: function(value){
        //console.log("");
        this.player.currentHealth += value;
        this.healthText.text = "100 / " + this.player.currentHealth;
    },

    modScore: function(value){
        //console.log("");
        this.score += value;
        this.scoreText.text = "Score:" + this.score;
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

        if(this.player.inWater){
            this.player.speed = 2;
        }else{
            this.player.speed = 4;
        }

		//player is in air
		if(this.player.isAir){

			if(this.player.v >= this.player.MAX){

				if(this.player.graphic.scale.x > 0.3){
                    //he hit critical point
					this.player.graphic.scale.x = this.player.graphic.scale.y -= 0.02;
				}else{
                    //He has landed
					this.player.isAir = false;
                    this.player.v = 0;
				}

			}else{
                //rising action of jump.
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
				//this.player.v = 0;
				this.player.t1 = this.player.t2 = 0;
				//console.log("JUMPING!");
			}
            this.player.t2++;
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
                    [50,450,50,50],
                    [920,50,50,50],
                    [920,450,50,50],
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