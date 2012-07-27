define([
    "jquery",
    "lodash",
    "stores/models/store_model",
    "backbone",
    "plugins/backbone.localStorage"

    
    ], 

    function ($, _, StoreModel, Backbone){

        var StoreCollection = Backbone.Collection.extend({

            model: StoreModel,
            
            localStorage: new Backbone.LocalStorage("Stores")
        });

        return StoreCollection;
    }
);