define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/record.html",
	"records/views/personal_view",
	"records/views/medicals_view",
	"records/views/ices_view",
	"records/views/telecoms_view",
	"records/views/addresses_view",

	], 

	function ($, _, Backbone, tmpl, PersonalView, MedicalsView, IcesView,
			TelecomsView, AddressesView){

		var RecordView = Backbone.View.extend({
			id: "record",
			className: "row-fluid",
			
			initialize: function () {
				
				this.views = [];
				this.template = _.template(tmpl);

				//rerendering the main template loses the connection to the
				// subviews rerendering therefore show an empty template. the
				// subviews exist, but are not attached to the dom.
				this.$el.html(this.template);

				this.views.push(new PersonalView({model: this.model}));
				this.views.push(
					new MedicalsView({
						model: this.model
						
					})
				);
				this.views.push(
					new IcesView({
						model: this.model,
						el: "#ices"
					})
				);
				this.views.push(
					new TelecomsView({
						model: this.model,
						el: "#telecoms"
					})
				);
				this.views.push(
					new AddressesView({
						model: this.model,
						el: "#addresses"
					})
				);
			},	
			render: function () {

				_.each(
					this.views,
					function (view) {this.$('left_column').append(view.render().el);}, 
					this
				);
				return this;
			}
		});

		return RecordView;
	}
);










