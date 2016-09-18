'use strict'

var app = app || {};

app.Player = function(){

	function Player(){

		this.health = 100;
		this.currentHealth = 100;
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
		this.speed = 4;
		this.inWater = false;
		this.inAir = false;
		this.v = 0;
		this.t1;
		this.t2;
		this.MAX = 0.3;
	};

	Player.prototype = Object.create(Player.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.test = function(){
		console.log(this.graphic);
	};

	return Player;
}();