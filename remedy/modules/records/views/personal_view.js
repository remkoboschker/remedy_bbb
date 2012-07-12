define([
	"jquery",
	"lodash",
	"backbone",
	"text!records/templates/personal.html"
	], 

	function ($, _, Backbone, tmpl){

		var PersonalView = Backbone.View.extend({

			initialize: function () {
				
				this.template = _.template(tmpl);
				this.model.on('change', this.render, this);
			},

			render: function () {
				
				this.$el.html(this.template(this.model.toJSON()));

				return this;
			}
		});

		return PersonalView;
	}
);