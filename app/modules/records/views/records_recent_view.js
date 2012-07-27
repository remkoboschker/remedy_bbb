define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_recent.html",
	"records/views/record_mini_view"
	],
	function ($, _, Backbone, tmpl, RecordMiniView) {
		
		var RecordsRecentView = Backbone.View.extend({

			tagName: "section",
			className: "span3 column",
			id: "recent_records",

			initialize: function () {

				this.template = _.template(tmpl);

				//B! list gets rendered for nothing just before view is removed
				this.collection.on("view change", this.renderList, this);

				this.recentRecordViews = [];
			},
			
			events: {
				
				"change select": "renderList"
			},
			
			render: function () {

				this.$el.html(this.template);

				this.renderList();

				return this;
			},

			renderList: function () {

				console.log("recent records renderList");
				//clean up first
				_.each(this.recentRecordViews, function (view) {

					view.close();

				}, this);

				//reset the foundRecordViewslist
				this.recentRecordViews = [];

				//add the views of the records that match the filter
				this.filter();

				//render and append the views of the records found
				_.each(this.recentRecordViews, function (view) {
					
					view.render();
					this.$("#records_recent_result").append(view.el);

				}, this);

				return this;
			},

			filter: function () {

				var viewedInMs;
				var recent;
				var nowInMs = new Date().valueOf();
				var back = this.$("option:selected").val();
				var dayInMs = 24 * 60 * 60 * 1000;

				if (back === "today") {

					recent = nowInMs - 1 * dayInMs;

				} else if (back === "yesterday") {

					recent = nowInMs - 2 * dayInMs;

				} else if (back === "lastWeek") {

					recent = nowInMs - 7 * dayInMs;

				} else {
					throw new Error("invalid select value");
				}

				this.collection.each(function (record) {

					if (recent < record.get("viewed")) {

						this.recentRecordViews.push(
							new RecordMiniView({model: record}));
					}

				}, this);
			}
		});

		return RecordsRecentView;
	}
);