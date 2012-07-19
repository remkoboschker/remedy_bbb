define([
    "jquery",
    "lodash",
    "records/models/medical_model",
    "backbone"
    ], 

    function ($, _, Model, Backbone){

        var MedicalCollection = Backbone.Collection.extend({

            model: Model
        });

        return MedicalCollection;
    }
);