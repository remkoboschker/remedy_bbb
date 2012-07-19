define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var AddressModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				street: "",
				number: "",
				extension: "",
				postalcode: "",
				city: "",
				provinceOrState: "",
				country: ""
			},

			initialize: function () {}

		});
	
		return AddressModel;
	}
);