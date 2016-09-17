'use strict'

var app = app || {};

app.Game = {

	init: function(rendererCtx, windowCtx, canvasCtx, stageCtx){
		this.renderer = rendererCtx;
		this.window = windowCtx;
		this.canvas = canvasCtx;
		this.stage = stageCtx;

		this.stateContainer = {};

		this.addState("MAIN_SCREEN", app.MainScreen);
		this.addState("GAME_SCREEN", app.GameScreen);

		this.currentState = undefined;
		this.nextState = "MAIN_SCREEN";

		// Start main loop
		this.update();
	},

	update: function(){
		if(this.nextState != undefined){
			console.log(this.nextState);
			console.log(this.stateContainer);
			this.stateContainer[this.nextState].init();
			this.currentState = this.nextState;
			this.nextState = undefined;
		}
		this.stateContainer[this.currentState].update();

		this.renderer.render(this.stage);
		requestAnimationFrame(this.update.bind(this));

		if(this.nextState != undefined){
			this.stateContainer[this.currentState].exit();
		}
	},

	addState: function(stateKey, functionParam){
		this.stateContainer[stateKey] = functionParam;
	},

	changeState: function(stateKey){
		this.nextState = stateKey;
	}
};