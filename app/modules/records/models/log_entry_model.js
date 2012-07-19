define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var LogEntryModel = Backbone.Model.extend({

			defaults: {
				"user": "",
				"datetime": "",
				"event": "",
				"key": "",
				"value": ""
			},

			initialize: function () {
				this.setDateTime();
			},

			setDateTime: function () {
				this.datetime = ""; // need to refactor and roll in to base 
									//object?
			}

		});
	
		return LogEntryModel;
	}
);