define([
	"jquery",
	"lodash",
	"backbone",

	//

	//views
	"records/views/main",
	"records/views/personal",
	"records/views/medicals",
	"records/views/ices",
	"records/views/telecoms",
	"records/views/addresses",

	"text!modules/records/templates/main.html"
	],

	function (remedy, mainTmpl) {

		var Record = {};

		Record.Router = Backbone.SubRoute.extend({
			routes: {
				"": "index",
				":id": "defaultPanel",
				":id/:panel": "selectPanel",
				":id/:panel/:item": "selectItem",
			},
			initialize: function () {
				console.log('new recordRouter');
				console.log(this);
			},
			index: function () {
				console.log("index");
			},
			defaultPanel: function (id) {
				console.log("record nummer: " + id);
			},
			selectPanel: function (id, panel) {
				console.log("record nummer: " + id);
				console.log("panel naam: " + panel);
			},
			selectItem: function (id, panel, item) {
				console.log("record nummer: " + id);
				console.log("panel naam: " + panel);
				console.log("item nummer: " + item);
			},
			other: function () {
				console.log("other");
			},
		});


		Record.Model = Backbone.Model.extend({

			//simple attributes get a default value
			defaults: {
				  "client_number"		:"klant nummer"
	    		, "initials"			:"initialen"
	    		, "first_name"			:"voornaam"
			    , "last_name"			:"achternaam"
			    , "id_number"			:"bsn"
			    , "id_document_scr"		:"/src/scans/paspoort_placeholder.png"
			    , "passphoto_src"		:"/src/photos/passphoto_placeholder.png"
			    , "passphoto_thumbnail"	:"/src/photos/passphoto_thumbnail_placeholder.png"
			    , "insurance_company"	:"maatschappij"
			    , "insurance_number"	:"polisnummer"
			    , "sex"					:"geslacht"
			    , "date_of_birth"		:"geboortedatum"
			    , "created"				:""
			    , "updated"				:""
			},

			//nested collections need to be initialised
			initialize: function() {

				this.on("change", function () {
					//Record.Views.Main.render();
				})

				/*this.logs = nestCollection(this, 'logs', new Logs(this.get('logs')));
			    this.medicals = nestCollection(this, 'medicals', new Medicals(this.get('medicals')));
			    this.ices = nestCollection(this, 'ices', new Ices(this.get('ices')));
			    this.consults = new Consults;
			    this.treatments = new Treatments;
			    this.telecoms = new Telecoms;
			    this.addresses = new Addresses;
			    this.photo_sets = new Photo_sets;
			    this.offers = new Offers;
			    this.receipts = new Receipts;
			    this.notes = new Notes;
			    this.ices = new Ices;*/
			}
		});


		Record.Collection = Backbone.Collection.extend({
  			model: Record.Model,
  			localStorage: new Backbone.LocalStorage("Records")
		});

		Record.Views = {};

		Record.Views.Personal = Backbone.View.extend({
			template: "record/personal",
			
		});

		Record.Views.Main = Backbone.View.extend({
			el: '#record',
			events: {
				"change": "render"
			},
			render: function ( event ) {
				var template;

				template = _.template(mainTmpl);
				this.$el.html(template);


				return this;
			}
		});

		Record.Views.Medicals = Backbone.View.extend({
			template: "record/medicals",
			
		});

		Record.Views.Ices = Backbone.View.extend({
			template: "record/ices",
			
		});

		Record.Views.Telecoms = Backbone.View.extend({
			template: "record/telecoms",
			
		});

		Record.Views.Addresses = Backbone.View.extend({
			template: "record/addresses",
			
		});


		return Record;
			
	});