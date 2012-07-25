define([
	"jquery",
	"lodash",
	"backbone",
	"text!records/templates/basic_details.html"
	], 

	function ($, _, Backbone, tmpl){

		var PersonalView = Backbone.View.extend({
			tagName: "section",
			id: "personal",
			className: "",

			events: {

				"click .inputContainer": "toggleInput",
				"click input": "inputClicked"
			},

			initialize: function () {
				
				this.template = _.template(tmpl);
				
				this.model.on("change", this.render, this);
			},

			render: function () {
				
				this.$el.html(this.template({
					givenName: this.model.get("givenName"),
					familyName: this.model.get("familyName"),
					dob: this.model.formDob(),
					age: this.model.age(),
					phone: this.model.formPhonePreferred(),
					mail: this.model.get("emailPreferred")
				}));

				return this;
			},

			toggleInput: function (event) {

				event.preventDefault();
				$(event.currentTarget).children("td").toggle();
			},

			inputClicked: function (event) {

				event.preventDefault();
				event.stopPropagation();
			}
		});

		return PersonalView;
	}
);