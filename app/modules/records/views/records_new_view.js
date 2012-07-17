define([
	"jquery",
	"lodash",
	"backbone",
	"text!modules/records/templates/records_new.html"
	],
	function ($, _, Backbone, tmpl) {
		var RecordsSearchView = Backbone.View.extend({
			tagName: 'section',
			className: 'span3',
			initialize: function () {		
				this.template = _.template(tmpl);
				this.collection.on('change', this.render, this);
				this.proxy = this.options.proxy;
			},
			events: {
				"click #new_record": "newRecord"
			},
			render: function () {				
				this.$el.html(this.template);
				return this;
			},
			newRecord: function () {

				this.proxy.trigger("hi", "haai");
				/*
				var newRecord = this.collection.create();
				
				if (newRecord) {
					this.collection.selected = newRecord.id;
					this.collection.trigger("selected");
				};
				*/
			}
		});

		return RecordsSearchView;
	}
);