define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var Ledgers = function (remedy) {
			
			
			var proxy = _.extend({}, Backbone.Events);
      		
		    proxy.on("all", function (event, args) {
		    	event = "ledgers:" + event;
		    	remedy.trigger(event, args);
		    });
		    
		    remedy.on("all", function (event, args) {
		    	var eventSpaces = event.split(":");
		    	if(eventSpaces.shift() !== "ledgers"){
		    		proxy.trigger(eventSpaces, args);
		    	} 
		    });

			remedy.on("records:hi", function(msg) {
        console.log('ledger proxy says: ' + msg);
      });

		}

		return Ledgers;
	}
)