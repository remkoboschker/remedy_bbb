define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var IceModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				givenName: "voornaam",
				familyName: "achternaam",
				relation: "relatie",
				telecom: "telecom"
			},

			initialize: function () {}

		});
	
		return IceModel;
	}
);