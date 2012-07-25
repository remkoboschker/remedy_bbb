define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/records_search.html",
	"records/views/record_mini_view"
	],

	function ($, _, Backbone, tmpl, RecordMiniView) {
		var RecordsSearchView = Backbone.View.extend({

			tagName: 'section',
			className: 'span3 column',
			id: "search_records",

			events: {
				
				"keyup input#search": "renderList"
			},

			initialize: function () {

				this.template = _.template(tmpl);

				this.collection.on("change add", this.render, this);

				this.foundRecordViews = [];

			},

			render: function () {

				this.$el.html(this.template);
				this.renderList();

				return this;
			},

			renderList: function () {

				//clean up first
				_.each(this.foundRecordViews, function (view) {

					view.close();

				}, this);

				//reset the foundRecordViewslist
				this.foundRecordViews = [];

				//add the views of the records that match the filter
				this.filter();

				//render and append the views of the records found
				_.each(this.foundRecordViews, function (view) {
					
					view.render();
					this.$('#search_result').append(view.el);

				}, this);

				return this;
			},

			filter: function () {

				var filterStr;
				var re;

				filterStr = this.$("input#search").val();
				// take out any whitespace (, ), -, /
				//filterStr = filterStr.replace(/[\s()-\/]/g, "");
				// insert leading zero in date if none is specified
				// for instance 111977 becomes 01011977 
				//filterStr = filterStr.replace()
				// add 19 if no full year is specified
				//filterStr = filterStr
				// make into an regular expression
				//with global and ignore case flags
				re = new RegExp(filterStr, "i");
				
				this.collection.each(function (record) {

					if (re.test(record.get("givenName"))|
						re.test(record.get("familyName"))|
						re.test(record.get("dateOfBirth"))|
						re.test(record.get("phonePreferred"))) {

						this.foundRecordViews.push(
							new RecordMiniView({model: record}));
					}

				}, this);
			}

		});

		return RecordsSearchView;
	}
);