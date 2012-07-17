define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var ConsultModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				history: "",
				examination: "",
				conclusion: "",
				plan: "",
				consultant: "", //employee
				start: "",
				finish: "",
				location: "",  // room
				motivation: "", //free text
				type: "" // from segmentation
			},

			//nested collections need to be initialised
			initialize: function() {


				
			}
		});
	
		return ConsultModel;
	}
);