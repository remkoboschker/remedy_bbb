define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/record_mini.html"
	],

	function ($, _, Backbone, tmpl) {
		
		var RecordsMiniView = Backbone.View.extend({

			tagName: "div",
			className: "row-fluid item mini",

			initialize: function () {

				this.template = _.template(tmpl);
			},

			events: {
				"click": "select"
			},

			render: function () {

				this.$el.html(this.template(this.model.toJSON()));

				return this;
			},

			select: function () {

				this.model.trigger("selected", this.model.id);
			}

		});

		return RecordsMiniView;
	}
);