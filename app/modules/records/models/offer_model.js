define([
	"jquery",
	"lodash",
	"backbone"
	],

	function ($, _, Backbone) {

		var OfferModel = Backbone.Model.extend({

			defaults: {
				date: "",
				number: "",
				issuer: "",
				singedCopySrc: "",
				discount: 0,
				treatments: "", // how to easily set groups of treatments?
				pricingModel: ""
			},

			initialize: function () {
				this.setDate();
				this.setNumber();
				this.setIssuer();
			},

			setDate: function () {},

			setNumber: function () {},

			setIssuer: function () {},

			getTotal: function () {}

		});
	
		return OfferModel;
	}
);