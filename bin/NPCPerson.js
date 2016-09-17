/*'use strict'

var app = app || {};

app.NPCPerson = function(){

	function NPCPerson(){
		this.graphic = app.Person.makePerson(0x00ff00, 0x00ff00, stage);
	};

	NPCPerson.prototype = Object.prototype;
	NPCPerson.prototype.constructor = NPCPerson;
	var p = NPCPerson.prototype;

	p.move = function(){

		//this.graphic.position.x+=1;
		console.log("MOVING!");
	};

	return NPCPerson;
}();*/

'use strict'

var app = app || {};

app.NPC = function(){

	function NPC(){
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
	};

	NPC.prototype = Object.create(NPC.prototype);
	NPC.prototype.constructor = NPC;

	NPC.prototype.moveAI = function(){
		this.graphic.position.x++;
	}

	return NPC;


	

}();