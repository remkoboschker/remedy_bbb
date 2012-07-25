define([
    "jquery",
    "lodash",
    "backbone",
    "nest/nestCollection",
    "nest/nestModel",
    "records/config",
    "records/collections/consult_collection",
    "records/collections/treatment_collection",
    "records/collections/photo_set_collection",
    "records/collections/note_collection",
    "records/collections/offer_collection",
    "records/collections/receipt_collection",
    "records/collections/log_collection",
    "records/models/address_model",
    "records/models/ice_model"
    ],

    function ($, _, Backbone, nestCollection, nestModel, config,
                    Consults, Treatments, PhotoSets, Notes, Offers, Receipts,
                    Logs, AddressModel, IceModel) {

        var RecordModel = Backbone.Model.extend({

            //simple attributes get a default value
            defaults: {

                "created": 0,
                "updated": 0,
                "viewed": 0

            },

            //nested collections need to be initialised
            initialize: function() {

                console.log(config);

                _.each(config.required, function (value, key) {

                    console.log(key);
                    console.log(value);


                    this.set(key, value, {silent: true});
                }, this);
                
                this.homeAddress = nestModel(
                        this,
                        'homeAddress',
                        new AddressModel(this.get('homeAddress'))
                    );

                this.ice = nestModel(
                        this,
                        'ice',
                        new IceModel(this.get('ice'))
                    );

                this.on("change", this.logEvent, this);

                /*
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
                */
            },

            age: function () {

                var dob = new Date(this.get("dateOfBirth"));
                
                var now = new Date();

                var age = now.getFullYear() - dob.getFullYear();

                if (now.getMonth() < dob.getMonth() + 1) {
                    age -= 1;
                } else if (now.getDate() < dob.getDate()) {
                    age -= 1;
                }

                return age;
            },

            formDob: function () {
                return this.formatDate(this.get("dateOfBirth"));
            },

            formPhonePreferred: function () {
                return this.formatPhone(this.get("phonePreferred"));
            },

            formatDate: function (date) {

                // 1977-03-15T10:06:03.864Z
                // strip leading zeros
                var re = /(\d{4})-(\d{2})-(\d{2})/;

                var result = date.match(re);

                if (result) {

                    return result[3] + "-" + result[2] + "-" + result[1];

                } else {

                    console.log("no match date: ", date);
                }
            },

            formatPhone: function (phoneNumber) {
                
                var re = /(\d{2})-(\d{1,3})-(\d{6,8})/;

                var result = phoneNumber.match(re);

                if (result) {

                    return "+" + result[1] + " " + result[2] + " " + result[3];

                } else {

                    console.log("no match phonenumber: ", phoneNumber);
                }
            },

            logEvent: function () {

                console.log("change");
            }
        });
    
        return RecordModel;
    }
);

