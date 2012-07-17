define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var NoteModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				author: "",
				datetime: "",
				content: "",
				access: ""
			},

			initialize: function () {}

		});
	
		return NoteModel;
	}
);