define([
    "jquery",
    "lodash",
    "backbone",

    "text!templates/nav.html"
    ], 

    function ($, _, Backbone, tmpl){

        var NavView = Backbone.View.extend({
            
            id: "",
            className: "",
            tagName: "div",
        
            initialize: function () {

                Backbone.history.on("route", this.setMenu, this);
                
                this.template = _.template(tmpl);

                this.views = [];
            },

            render: function () {

                this.$el.html(this.template);

                return this;
            },

            setMenu: function (event) {
        
                var hash = Backbone.history.fragment;

                this.$(".active").removeClass("active");
                this.$('a[href="#' + hash + '"]').parent().addClass("active");
            }
        });

        return NavView;
    }
);