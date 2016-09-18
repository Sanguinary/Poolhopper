'use strict'

var app = app || {};

app.NPC = function(){

	function NPC(){
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
	};

	NPC.prototype = Object.create(NPC.prototype);
	NPC.prototype.constructor = NPC;

	NPC.prototype.moveAI = function(x, y){
		if(this.graphic.position.x < x){this.graphic.position.x++;}
		else{this.graphic.position.x--}

		if(this.graphic.position.y < y){this.graphic.position.y++;}
		else{this.graphic.position.y--}
	}

	return NPC;


	

}();