define([
	"jquery",
	"lodash",
	"backbone",
	"records/record_router",
	"records/collections/record_collection",
	],

	function ($, _, Backbone, Router, RecordCollection) {

		var Records = function (remedy) {

      		var proxy = _.extend({}, Backbone.Events);
      		
		    proxy.on("all", function (event, args) {
		    	event = "records:" + event;
		    	remedy.trigger(event, args);
		    });
		    
		    remedy.on("all", function (event, args) {
		    	var eventSpaces = event.split(":");
		    	if(eventSpaces[0] !== "records"){
		    		proxy.trigger(event, args);
		    	}
		        
		    });
			
			this.collection = new RecordCollection();
			this.router = new Router("records/")
			this.router.collection = this.collection;
			this.router.proxy = proxy;
		}

		return Records;
	}
)