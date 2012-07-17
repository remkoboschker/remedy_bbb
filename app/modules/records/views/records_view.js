define([
	"jquery",
	"lodash",
	"backbone",

	"records/views/records_search_view",
	"records/views/records_recent_view",
	"records/views/appointments_view",
	"records/views/records_new_view"
	],
	function ($, _, Backbone,RecordsSearchView, RecordsRecentView,
			AppointmentsView, RecordsNewView) {

		var RecordsView = Backbone.View.extend({
			className: "row-fluid",
			initialize: function () {
				this.views = [];
				this.views.push(new RecordsSearchView(
					{collection: this.collection, proxy: this.options.proxy}));
				this.views.push(new RecordsRecentView(
					{collection: this.collection, proxy: this.options.proxy}));
				this.views.push(new AppointmentsView(
					{collection: this.collection, proxy: this.options.proxy}));
				this.views.push(new RecordsNewView(
					{collection: this.collection, proxy: this.options.proxy}));
			},
			render: function () {
				_.each(
					this.views,
					function (view) {this.$el.append(view.render().el);}, 
					this
				);
			}
		});

		return RecordsView;
	}
);