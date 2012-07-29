define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var AddressModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				street: "straat",
				number: "nr",
				extension: "ext",
				postalcode: "postcode",
				city: "stad",
				province: "provincie",
				country: "land"
			},

			initialize: function () {

			}
		});
	
		return AddressModel;
	}
);