define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records.html",
	"records/views/records_search_view",
	"records/views/records_recent_view",
	"records/views/appointments_view"
	],
	function ($, _, Backbone, tmpl, RecordsSearchView, RecordsRecentView, AppointmentsView) {
		var RecordsView = Backbone.View.extend({

		});

		return RecordsView;
	}
);