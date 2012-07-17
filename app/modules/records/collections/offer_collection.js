define([
	"jquery",
	"lodash",
	"records/models/offer_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var Collection = Backbone.Collection.extend({

  			model: Model
		});

		return Collection;
	}
);