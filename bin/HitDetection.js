'use strict'

var app = app || {};

app.HitDetection = {

	HIT: function(player, other){
		//player has an x and y value as well as a width and height
                //        .position.x .position.y .width .height
                //container has an x and y value as wel as a width and height
                //console.log(other.poolX);
                //console.log(other.poolY);
                //console.log(other.poolWidth);
                //console.log(other.poolHeight);
    /*
                if(player.position.x >= other.poolX )
                    if(player.position.x  <= other.poolX + other.poolWidth)
                        if((player.position.y >= other.poolY) )
                            if(player.position.y <= other.poolY + other.poolHeight)
                                 return true;
                 
                if(player.position.x + player.width >= other.poolX )
                    if(player.position.x + player.width <= other.poolX + other.poolWidth)
                        if((player.position.y >= other.poolY) )
                            if(player.position.y <= other.poolY + other.poolHeight)
                                 return true;
                 
                 if(player.position.x >= other.poolX )
                    if(player.position.x  <= other.poolX + other.poolWidth)
                        if((player.position.y + player.height >= other.poolY) )
                            if(player.position.y + player.height <= other.poolY + other.poolHeight)
                                 return true;
                 
                 if(player.position.x + player.width>= other.poolX )
                    if(player.position.x + player.width <= other.poolX + other.poolWidth)
                        if((player.position.y + player.height>= other.poolY) )
                            if(player.position.y + player.height <= other.poolY + other.poolHeight)
                                 return true;
      */           
                 if (player.position.x < other.x + other.width &&
                    player.position.x + player.width > other.x &&
                    player.position.y < other.y + other.height &&
                    player.height + player.position.y > other.y) {
                    return true;
                }

                return false;
	}

	
};