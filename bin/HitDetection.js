'use strict'

var app = app || {};

app.HitDetection = {

	HIT: function(player, other){
		        
                 if (player.position.x < other.x + other.width &&
                    player.position.x + player.width > other.x &&
                    player.position.y < other.y + other.height &&
                    player.height + player.position.y > other.y) {
                    return true;
                }

                return false;
	}

	
};