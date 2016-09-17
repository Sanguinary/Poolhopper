'use strict'

var app = app || {};

app.Player = function(){

	function Player(){
		this.graphic = app.Person.makePerson(0xffeecc, 0xffeecc, stage);
	};

	Player.prototype = Object.prototype;
	Player.prototype.constructor = Player;

	return Player;
}();