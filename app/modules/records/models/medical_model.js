define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var MedicalModel = Backbone.Model.extend({

			defaults: {
				type: "", // allergy, sensitivity, condition, medication,
						  // impairment, intoxication
				description: "",
				start: "",
				stop: "",
				note: false // is there a note available expanding on the
							// issue?
			},

			initialize: function () {}

		});
	
		return MedicalModel;
	}
);