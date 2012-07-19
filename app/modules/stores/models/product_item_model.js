define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var ProductItemModel = Backbone.Model.extend({

			defaults: {
				"producer": "",
				"name": "",
				"variation": "",
				"batchNr": "",
				"expiryDate": "",
				"unitSize": ""
			},
			
			initialize: function () {}

		});
	
		return ProductItemModel;
	}
);