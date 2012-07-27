define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_new.html",
	"records/views/record_mini_view"
	],

	function ($, _, Backbone, tmpl, RecordMiniView) {
		
		var RecordsNewView = Backbone.View.extend({
			
			tagName: "section",
			className: "span3 column",
			id: "new_records",

			initialize: function () {

				this.template = _.template(tmpl);

				this.collection.on("change add", this.renderList, this);

				this.newRecordViews = [];
			},
			
			events: {
				
				"click #new_record": "newRecord"
			},
			
			render: function () {

				this.$el.html(this.template);
				this.renderList();

				return this;
			},
			
			newRecord: function () {

				var newRecord = this.collection.create({	
						created: Date.now()
					},
					{wait: true});
			},

			renderList: function () {

				//clean up first
				_.each(this.newRecordViews, function (view) {

					view.close();

				}, this);

				//reset the foundRecordViewslist
				this.newRecordViews = [];

				//add the views of the records that match the filter
				this.filter();

				//render and append the views of the records found
				_.each(this.newRecordViews, function (view) {
					
					view.render();
					this.$('#new_records_list').append(view.el);

				}, this);

				return this;
			},

			filter: function () {

				this.collection.each(function (record) {

					if (record.get("updated") === 0) {

						this.newRecordViews.push(
							new RecordMiniView({model: record}));
					}

				}, this);
			}
		});

		return RecordsNewView;
	}
);