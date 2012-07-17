define([
	"jquery",
	"lodash",
	"records/models/note_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var Collection = Backbone.Collection.extend({

  			model: Model
		});

		return Collection;
	}
);