'use strict'

var app = app || {};


app.GameOver = {

	init: function(stage){

		var text = new PIXI.Text('GAME OVER',{fontFamily : 'Arial', fontSize: 72, fill : 0xff1010, align : 'center'});
		stage.addChild(text);

		this.testButton = new app.Button(300, 200, 50, 50, "Restart?");
		stage.addChild(this.testButton);		
	},

	update: function(){
		console.log("Game Over");
	},

	exit: function(){
		for (var i = stage.children.length - 1; i >= 0; i--) {	
			stage.removeChild(stage.children[i]);
        }
		console.log("GameOver: exit");
	},
};