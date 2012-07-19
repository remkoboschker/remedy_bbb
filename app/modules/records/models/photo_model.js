define([
    "jquery",
    "lodash",
    "backbone"
    ],

    function ($, _, Backbone) {

        var PhotoModel = Backbone.Model.extend({

            //simple attributes get a default value
            defaults: {
                photoSrc: "",   //does the photo need some sort of id to tie it
                                //back to the client of its type etc.? Or is
                                //it safer not to do that. How big is the 
                                //chance of loosing the link?
                type: "" //front left right above nose ...
            },

            initialize: function () {}

        });
    
        return PhotoModel;
    }
);