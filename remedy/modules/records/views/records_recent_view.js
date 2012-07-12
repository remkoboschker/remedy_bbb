define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_recent.html",
	"records/views/records_mini_view"
	],
	function ($, _, Backbone, tmpl, RecordsMiniView) {
		var RecordsRecentView = Backbone.View.extend({
			initialize: function () {		
				this.template = _.template(tmpl);
				this.collection.on('change', this.render, this);
			},
			render: function () {				
				this.$el.html(this.template);

				return this;
			}
		});

		return RecordsRecentView;
	}
);