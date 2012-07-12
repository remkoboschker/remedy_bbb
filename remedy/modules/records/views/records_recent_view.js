define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_recent.html",
	"records/views/records_mini_view"
	],
	function ($, _, Backbone, tmpl, RecordsMiniView) {
		var RecordsRecentView = Backbone.View.extend({

		});

		return RecordsRecentView;
	}
);