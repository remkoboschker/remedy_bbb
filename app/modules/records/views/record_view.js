define([
	"jquery",
	"lodash",
	"backbone",

	"text!modules/records/templates/record.html",
	"records/views/basic_details_view",
	"records/views/medical_warnings_view",
	"records/views/other_details_view"
	], 

	function ($, _, Backbone, tmpl, BasicDetailsView, MedicalWarningsView,
					OtherDetailsView){

		var RecordView = Backbone.View.extend({
			
			id: "record",
			className: "row-fluid",
			
			initialize: function () {
				
				
				this.template = _.template(tmpl);

				this.views = [];
				
				//this.views.push(new PersonalDetailsView({model: this.model}));
				this.views.push(new BasicDetailsView({model: this.model}));
				this.views.push(new MedicalWarningsView({model: this.model}));
				this.views.push(new OtherDetailsView({model: this.model}));
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

				this.model.age();

				return this;
			}
		});

		return RecordView;
	}
);










