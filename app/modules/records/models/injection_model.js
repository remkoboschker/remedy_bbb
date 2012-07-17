define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var InjectionModel = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				product: "", // serialnumber from store
				amount: "", // in ml can be entered in units -> convert to ml
				locationName: "", // location can be mapped from coord
				locationX: "",
				locationY: "" 
			},

			initialize: function () {},

			convertToMl: function () {},

			mapLocationName: function () {}
		});
	
		return InjectionModel;
	}
);