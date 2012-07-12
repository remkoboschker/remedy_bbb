define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/appointments.html",
	"records/views/appointments_mini_view"
	],
	function ($, _, Backbone, tmpl, AppointmentsMiniView) {
		var AppointmentsView = Backbone.View.extend({
			initialize: function () {		
				this.template = _.template(tmpl);
				this.collection.on('change', this.render, this);
			},
			render: function () {				
				this.$el.html(this.template);

				return this;
			}
		});

		return AppointmentsView;
	}
);