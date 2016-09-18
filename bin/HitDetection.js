'use strict'

var app = app || {};

app.HitDetection = {

	Hit: function(player, OTHER){
		//player has an x and y value as well as a width and height
                //        .position.x .position.y .width .height
                //container has an x and y value as wel as a width and height
                console.log(OTHER.position.x);
                console.log(OTHER.position.y);
                console.log(OTHER.width);
                console.log(OTHER.height);
                if((player.position.x >= OTHER.position.x )&& (player.position.x + player.width <= OTHER.position.x))
                    if((player.position.y >= OTHER.position.y) && (player.position.y+player.height <= OTHER.position.y))
                        
                            return true;
                    
                return false;
	}

	
};