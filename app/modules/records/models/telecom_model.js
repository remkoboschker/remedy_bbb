define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var TelecomModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				description: "",// private phone, private mail, twitter,
								// facebook, linkedin, work phone, work mail,
								// website, language, preferred
				identifier: ""
			},

			initialize: function () {},

		});
	
		return TelecomModel;
	}
);