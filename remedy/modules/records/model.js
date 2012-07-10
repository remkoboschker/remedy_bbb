define([
	"lodash",
	"backbone",
	"modules/nestCollection/nestCollection",
	"modules/log/logCollection",

], function (_, Backbone, nestCollection, Logs){

	var Record = Backbone.Model.extend({

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

	return Record;

});
		