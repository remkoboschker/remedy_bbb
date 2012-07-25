define([
	"jquery",
	"lodash",
	"backbone",
	"text!records/templates/medical_warnings.html",
	"text!records/templates/medical_warnings_partial.html"
	], 

	function ($, _, Backbone, tmpl, partial){

		var MedicalWarningsView = Backbone.View.extend({

			tagName: "section",
			className: "warning",
			id: "medicals",

			initialize: function () {

				this.template = _.template(tmpl);
				this.partial = _.template(partial);
				
				this.model.on("change:medicalHistory", this.render, this);
			},

			render: function () {

				this.$el.html(this.template());
				this.$("tbody").append(
					this.partial({
						type: "type",
						subtype: "subtype",
						start: "start",
						end: "einde"
					})
				);

				return this;
			}
		});

		return MedicalWarningsView;
	}
);