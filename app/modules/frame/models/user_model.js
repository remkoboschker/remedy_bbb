define([
    "jquery",
    "lodash",
    "backbone"
    ],

    function ($, _, Backbone) {

        var UserModel = Backbone.Model.extend({

            defaults: {
                username: "username",
                blocked: false,
                created: 0,
                publicKey: "",
                ca: ""
            },

            initialize: function () {}

        });
    
        return UserModel;
    }
);