define([
	"jquery",
	"lodash",
	"records/models/record_model",
	"backbone",
	"plugins/backbone.localStorage"

	
	], 

	function ($, _, RecordModel, Backbone){

		var RecordCollection = Backbone.Collection.extend({

  			model: RecordModel,
  			
  			localStorage: new Backbone.LocalStorage("Records")
		});

		return RecordCollection;
	}
);











