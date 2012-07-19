define([
    "jquery",
    "lodash",
    "backbone",
    "nestCollection/nestCollection",
    "records/collections/medical_collection",
    "records/collections/ice_collection",
    "records/collections/telecom_collection",
    "records/collections/address_collection",
    "records/collections/consult_collection",
    "records/collections/treatment_collection",
    "records/collections/photo_set_collection",
    "records/collections/note_collection",
    "records/collections/offer_collection",
    "records/collections/receipt_collection",
    "records/collections/log_collection"
    ],

    function ($, _, Backbone, nestCollection,
            Medicals, Ices, Telecoms, Addresses, Consults, Treatments,
            PhotoSets, Notes, Offers, Receipts, Logs) {

        var RecordModel = Backbone.Model.extend({

            //simple attributes get a default value
            defaults: {
                // personal
                "client_number": "klant nummer",
                "initials": "initialen",
                "givenName": "voornaam",
                "familyName": "achternaam",
                "idNumber": "bsn",
                "idDocumentScr": "/src/scans/paspoort_placeholder.png",
                "passphotoSrc": "/src/photos/passphoto_placeholder.png",
                "passphotoThumbnail": 
                        "/src/photos/passphoto_thumbnail_placeholder.png",
                "insuranceCompany": "maatschappij",
                "insuranceNumber": "polisnummer",
                "sex": "geslacht",
                "dateOfBirth": "31-12-1999",

                // management
                "created": "",
                "updated": "",
                "viewed": 0

                //service
            },

            //nested collections need to be initialised
            initialize: function() {

                this.medicals = nestCollection(this, 'medicals',
                        new Medicals(this.get('medicals')));
                this.medicals.add();

                this.ices = nestCollection(this, 'ices',
                        new Ices(this.get('ices')));
                this.ices.add();

                this.telecoms = nestCollection(this, 'telecoms',
                        new Telecoms(this.get('telecoms')));
                this.telecoms.add();

                this.addresses = nestCollection(this, 'addresses',
                        new Addresses(this.get('addresses')));
                this.addresses.add();


                this.consults = nestCollection(this, 'consults',
                        new Consults(this.get('consults')));
                this.consults.add();

                this.treatments = nestCollection(this, 'treatments',
                        new Treatments(this.get('treatments')));
                this.treatments.add();

                this.photoSets = nestCollection(this, 'photoSets',
                        new PhotoSets(this.get('photoSets')));
                this.photoSets.add();

                this.notes = nestCollection(this, 'notes',
                        new Notes(this.get('notes')));
                this.notes.add();

                this.offers = nestCollection(this, 'offers',
                        new Offers(this.get('offers')));
                this.offers.add();

                this.receipts = nestCollection(this, 'receipts',
                        new Receipts(this.get('receipts')));
                this.receipts.add();

                this.logs = nestCollection(this, 'logs',
                        new Logs(this.get('logs')));
                this.logs.add();
            }
        });
    
        return RecordModel;
    }
);

