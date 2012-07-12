define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/appointments.html",
	"records/views/appointments_mini_view"
	],
	function ($, _, Backbone, tmpl, AppointmentsMiniView) {
		var AppointmentsView = Backbone.View.extend({

		});

		return AppointmentsView;
	}
);