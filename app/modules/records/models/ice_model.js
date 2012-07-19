define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var IceModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				givenName: "",
				familyName: "",
				relation: "",
				telecomIdentifier: ""
			},

			initialize: function () {}

		});
	
		return IceModel;
	}
);