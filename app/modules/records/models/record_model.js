define([
    "jquery",
    "lodash",
    "backbone",
    "helpers/nestCollection",
    "helpers/nestModel",
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

                "givenName": "voornaam",
                "familyName": "achternaam",
                "dateOfBirth": "1977-03-15T10:06:03.864Z",
                "emailPreferred": "account@provider.com",
                "phonePreferred": "31-6-00000000",
                "satisfaction": 3,
                "value": 3,
                "created": 0,
                "updated": 0,
                "viewed": 0

            },

            //nested collections need to be initialised
            initialize: function() {

                _.each(config, function (settings, key) {

                    if (settings.required) {

                        if(settings.type === "address") {

                            this.addAddress(key);

                        } else if (settings.type === "ice") {

                            this.ice = nestModel(
                                    this,
                                    'ice',
                                    new IceModel(this.get('ice'))
                            );

                        }
                    }
                }, this);
            
                

                

                this.on("sync", this.setUpdated, this);

                /*
                this.medicals = nestCollection(this, 'medicals',
                        new Medicals(this.get('medicals')));
                this.medicals.add();

                this.treatments = nestCollection(this, 'treatments',
                        new Treatments(this.get('treatments')));
                this.treatments.add();

                this.photoSets = nestCollection(this, 'photoSets',
                        new PhotoSets(this.get('photoSets')));
                this.photoSets.add();

                this.logs = nestCollection(this, 'logs',
                        new Logs(this.get('logs')));
                this.logs.add();
                */
            },

            addAddress: function (attribute) {

                console.log(attribute);

                this[attribute] = nestModel(
                        this,
                        attribute,
                        new AddressModel(this.get(attribute))
                    );

                console.log(this);
            },

            setUpdated: function () {

                this.set("updated", Date.now(), {silent: true});
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

                    return "wrong format";
                }
            },

            formatPhone: function (phoneNumber) {
                
                var re = /(\d{2})-(\d{1,3})-(\d{6,8})/;

                var result = phoneNumber.match(re);

                if (result) {

                    return "+" + result[1] + " " + result[2] + " " + result[3];

                } else {

                    return "wrong format";
                }
            }
        });
    
        return RecordModel;
    }
);

