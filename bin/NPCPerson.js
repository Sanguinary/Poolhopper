'use strict'

var app = app || {};

app.NPC = function(){

	function NPC(){
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
	};

	NPC.prototype = Object.create(NPC.prototype);
	NPC.prototype.constructor = NPC;

	NPC.prototype.moveAI = function(x, y, people, w){
                var dx = 0;
                var dy = 0;
		if(this.graphic.position.x < x){
                    this.graphic.position.x++;
                    dx = 1;
                }else{
                    this.graphic.position.x--
                    dx = -1;
                }

		if(this.graphic.position.y < y){
                    //collision detect
                    this.graphic.position.y++;
                    dy = 1;
                }else{
                    this.graphic.position.y--
                    dy = -1;
                }
                //wall collision detector
                for(var i = 0, len = w.length; i < len; i ++){
                    if(app.HitDetection.HIT(this.graphic, w[i])){
                        if(dy > 0){
                            this.graphic.position.y--;
                        }
                        
                        if(dy < 0){
                            this.graphic.position.y++;
                        }
                        
                        if(dx > 0)
                            this.graphic.position.x--;
                        
                        if(dx < 0)
                            this.graphic.position.x++;
                        //console.log("I WAS HIT BY A WALL");
                        return;
                    }
                }
                
                //collision detection algorithm
                for(var i = 0, len = people.length; i < len; i ++){
                    if(app.HitDetection.HIT(this.graphic, people[i].graphic)){
                        //if the move causes a collision the enemy only gets x or y
                        if(Math.random() > .5)
                            this.graphic.position.y =this.graphic.position.y - dy;
                        else
                            this.graphic.position.x = this.graphic.position.x-  dx;
                        //console.log("COLLISION OF ENEMY");
                    }
                }
                
                
	}

	return NPC;


	

}();