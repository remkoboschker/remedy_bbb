define([
	"jquery",
	"lodash",
	"records/models/address_model",
	"backbone"
	], 

	function ($, _, Model, Backbone){

		var AddressCollection = Backbone.Collection.extend({

  			model: Model
		});

		return AddressCollection;
	}
);