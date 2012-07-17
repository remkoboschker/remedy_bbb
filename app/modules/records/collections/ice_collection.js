define([
	"jquery",
	"lodash",
	"records/models/ice_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var IceCollection = Backbone.Collection.extend({

  			model: Model
		});

		return IceCollection;
	}
);