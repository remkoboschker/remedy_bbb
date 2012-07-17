define([
	"jquery",
	"lodash",
	"records/models/treatment_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var Collection = Backbone.Collection.extend({

  			model: Model
		});

		return Collection;
	}
);