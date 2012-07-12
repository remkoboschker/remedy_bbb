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
			el: '#content',

			initialize: function () {
				this.views = {};
				this.template = _.template(tmpl);
				this.$el.html(this.template);

				this.views.recordsSearchView = new RecordsSearchView({
						collection: this.collection,
						el: "#records_search"
					});

				this.views.recordsRecentView = new RecordsRecentView({
						collection: this.collection,
						el: "#records_recent"
					});

				this.views.appointmentsView = new AppointmentsView({
						collection: this.collection,
						el: "#appointments"
					});
			},
			render: function () {
				console.log(this.views);
				this.views.recordsSearchView.render();
				this.views.recordsRecentView.render();
				this.views.appointmentsView.render();
			}
		});

		return RecordsView;
	}
);