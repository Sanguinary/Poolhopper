'use strict'

var app = app || {};

app.Player = function(){

	function Player(){

		this.health = 100;
		this.currentHealth = 100;
		//this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
		this.speed = 4.5;
		//this.graphic = app.Person.makePerson(0x900101, 0xFE0000, stage);
		this.graphic = app.Person.makePerson(0x00ffff, 0xff0000, stage);
		this.speed = 2;
		this.waterSpeed = 1.4;
		this.inWater = false;
		this.inAir = false;
		this.v = 0;
		this.t1;
		this.t2;
		this.MAX = 0.22;
	};

	Player.prototype = Object.create(Player.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.test = function(){
		console.log(this.graphic);
	};

	return Player;
}();