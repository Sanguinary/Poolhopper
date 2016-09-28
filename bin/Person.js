'use strict'

var app = app || {};

app.Person = {

	makePerson: function(headColor, bodyColor, stage){
		var head = new PIXI.Graphics();	
		var body = new PIXI.Graphics();
		this.personCon = new PIXI.Container();

		//Draw the head
		head.lineStyle(2, 0x000000);
		head.beginFill(headColor, 1.0);
		head.beginFill(headColor, 1);
		head.drawCircle(100, 50, 30);
		head.endFill();

		//Draw the body
		body.lineStyle(2, 0x000000);
		body.beginFill(bodyColor, 1);
		body.drawEllipse(100, 50, 100, 50);
		body.endFill();

		this.personCon.addChild(body);
		this.personCon.addChild(head);
		this.personCon.pivot = new PIXI.Point(100, 50);
		this.personCon.scale.x = this.personCon.scale.y = 0.12;
		stage.addChild(this.personCon);
		

		return this.personCon;
	}
};