define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/record.html",
	"records/views/personal_view",
	"records/views/medicals_view",
	"records/views/ices_view",
	"records/views/telecoms_view",
	"records/views/addresses_view"
	], 

	function ($, _, Backbone, tmpl, PersonalView, MedicalsView, IcesView,
			TelecomsView, AddressesView){

		var RecordView = Backbone.View.extend({
			
			id: "record",
			className: "row-fluid",
			
			initialize: function () {
				
				
				this.template = _.template(tmpl);

				this.model.on("change", this.render());
				this.model.trigger("view", this.model.id);

				this.views = [];
				this.views.push(new PersonalView({model: this.model}));
				this.views.push(new MedicalsView({model: this.model}));
				this.views.push(new IcesView({model: this.model}));
				this.views.push(new TelecomsView({model: this.model}));
				this.views.push(new AddressesView({model: this.model}));
			},

			render: function () {

				// without the silent a callback raised a vague error
				this.model.save("viewed", Date.now(), {silent: true});

				this.$el.html(this.template);

				_.each(
					this.views,
					function (view) {
						this.$('#left_column').append(view.render().el);
					}, 
					this
				);
				return this;
			}
		});

		return RecordView;
	}
);










