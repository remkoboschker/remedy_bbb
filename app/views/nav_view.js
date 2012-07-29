define([
    "jquery",
    "lodash",
    "backbone",

    "text!templates/nav.html"
    ], 

    function ($, _, Backbone, tmpl){

        var NavView = Backbone.View.extend({
            
            id: "navbar",
            className: "navbar navbar-fixed-top",
            tagName: "div",
        
            initialize: function () {

                Backbone.history.on("route", this.setMenu, this);
                
                this.template = _.template(tmpl);
            },

            render: function () {

                this.$el.html(this.template);

                return this;
            },

            setMenu: function (event) {
        
                var hash = Backbone.history.fragment;

                //strip subpaths
                hash = hash.split("/");

                this.$(".active").removeClass("active");
                this.$('a[href="#' + hash[0] + '"]').parent().addClass("active");
            }
        });

        return NavView;
    }
);