define([
	"jquery",
	"lodash",
	"backbone",
	"text!records/templates/ices.html"
	], 

	function ($, _, Backbone, tmpl){

		var IcesView = Backbone.View.extend({

			initialize: function () {

				this.template = _.template(tmpl);
				this.model.on('change', this.render, this);
			},

			render: function () {

				this.$el.html(this.template(this.model.toJSON()));

				return this;
			}
		});

		return IcesView;
	}
);