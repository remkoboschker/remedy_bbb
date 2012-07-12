define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_search.html",
	"records/views/records_mini_view"
	],
	function ($, _, Backbone, tmpl, RecordsMiniView) {
		var RecordsSearchView = Backbone.View.extend({
			initialize: function () {		
				this.template = _.template(tmpl);
				this.collection.on('change', this.render, this);
			},
			render: function () {				
				this.$el.html(this.template);

				return this;
			}
		});

		return RecordsSearchView;
	}
);