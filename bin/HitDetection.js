'use strict'

var app = app || {};

app.HitDetection = {

	HIT: function(player, other){
                //prevents players from not moving due to self collision
		 if(player === other){
                     return false;
                 }
                 
                 if (player.position.x < other.x + other.width &&
                    player.position.x + player.width > other.x &&
                    player.position.y < other.y + other.height &&
                    player.height + player.position.y > other.y) {
                    return true;
                }

                return false;
	}

	
};