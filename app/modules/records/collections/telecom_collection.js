define([
	"jquery",
	"lodash",
	"records/models/telecom_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var TelecomCollection = Backbone.Collection.extend({

  			model: Model
		});

		return TelecomCollection;
	}
);