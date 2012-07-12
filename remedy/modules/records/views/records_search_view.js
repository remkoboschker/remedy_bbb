define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_search.html",
	"records/views/records_mini_view"
	],
	function ($, _, Backbone, tmpl, RecordsMiniView) {
		var RecordsSearchView = Backbone.View.extend({

		});

		return RecordsSearchView;
	}
);