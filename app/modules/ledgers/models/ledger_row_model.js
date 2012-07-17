define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var LedgerRowModel = Backbone.Model.extend({

			defaults: {
				date: "",
				credit: true,
				enteredBy: "",
				amount: "",
				description: "",
				group: "" // pin, cash, creditcard or product collection
			},

			initialize: function () {}

		});
	
		return LedgerRowModel;
	}
);