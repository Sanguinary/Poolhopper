'use strict'

var app = app || {};

app.Player = function(){

	function Player(){
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
		this.speed = 5;
		this.graphic.scale.x = this.graphic.scale.y = 0.3;
		//this.graphic.anchor.x = this.graphic.anchor.y = 0.5;
	};

	Player.prototype = Object.create(Player.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.test = function(){
		console.log(this.graphic);
	};

	return Player;
}();