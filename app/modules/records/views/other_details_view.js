define([
	"jquery",
	"lodash",
	"backbone",
	"records/config",
	"text!records/templates/other_details.html",
	"text!records/templates/details_menu_item.html",
	"text!records/templates/other_details_item.html"
	], 

	function ($, _, Backbone, config, tmpl, menuTmpl, detailTmpl) {

		var AddressesView = Backbone.View.extend({

			tagName: "section",
			className: "",
			id: "otherDetails",

			events: {

				"click ul#addMenu": "addItem",
				"click ul#removeMenu": "removeItem",
				"click .inputContainer": "toggleInput",
				"click input": "inputClicked"
			},

			initialize: function () {
				
				this.template = _.template(tmpl);
				this.menuTmpl = _.template(menuTmpl);
				this.detailsTmpl = _.template(detailTmpl);

				this.model.on("change", this.render, this);
			},

			render: function () {

				this.$el.html(this.template());

				_.each(config.nonRequired, function (label, key) {

					if (this.model.has(key)) {
	
						this.$("#removeMenu").append(
							this.menuTmpl({
								key: key,
								label: label
							})
						);

					} else {

						this.$("#addMenu").append(
							this.menuTmpl({
								key: key,
								label: label
							})
						);
					}

				}, this);

				_.each(config.otherPersInf, function (label, key) {
					
					if (this.model.has(key)) {

						this.$("tbody").append(
								this.detailsTmpl({
									label: label,
									value: "test"//this.model.get("key")
								})
							);
					}
					
				}, this);

				return this;
			},

			addItem: function (event) {

				event.preventDefault();
				this.model.set(event.target.dataset.target, "");
				this.model.save();
			},

			removeItem: function (event) {

				event.preventDefault();
				this.model.unset(event.target.dataset.target, "");
				this.model.save();
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

		return AddressesView;
	}
);