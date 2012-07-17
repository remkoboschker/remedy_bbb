define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var UserModel = Backbone.Model.extend({

			defaults: {
				"company": "",
				"name": "",
				"role": "",
				"publicKey": "",
				"blocked": false
			},

			initialize: function () {}

		});
	
		return UserModel;
	}
);