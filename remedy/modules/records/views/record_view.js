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

	function ($, _, Backbone, mainTmpl, PersonalView, MedicalsView, IcesView, TelecomsView, AddressesView){

		var MainView = Backbone.View.extend({
			
			el: '#record',
			
			initialize: function () {

				this.template = _.template(mainTmpl);

				//rerendering the main template loses the connection to the subviews
				//rerendering therefore show an empty template. the subviews exist, but are
				//not attached to the dom.
				this.$el.html(this.template);

				this.personalView = new PersonalView({
						model: this.model,
						el: "#personal"
					});
				this.medicalsView = new MedicalsView({
						model: this.model,
						el: "#medicals"
					});
				this.icesView = new IcesView({
						model: this.model,
						el: "#ices"
					});
				this.telecomsView = new TelecomsView({
						model: this.model,
						el: "#telecoms"
					});
				this.addressesView = new AddressesView({
						model: this.model,
						el: "#addresses"
					});
			},
			
			render: function () {

				this.personalView.render();

				this.medicalsView.render();

				this.icesView.render();

				this.telecomsView.render();

				this.addressesView.render();

				return this;
			}
		});
		return MainView;
	}
);










