define([
    "jquery",
    "lodash",
    "backbone",
    "nest/nestCollection",
    "records/collections/injection_collection"
    ],

    function ($, _, Backbone, nestCollection, Injections) {

        var TreatmentModel = Backbone.Model.extend({

            //simple attributes get a default value
            defaults: {
                physician: "",
                start: "",
                stop: "",
                location: "",  // room
                motivation: ""
            },

            //nested collections need to be initialised
            initialize: function() {
                this.injections = nestCollection(this, 'injections',
                        new Injections(this.get('injections')));
                this.injections.add();


                
            }
        });
    
        return TreatmentModel;
    }
);