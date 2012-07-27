define([
    "jquery",
    "lodash",
    "backbone",

    "text!templates/home.html"
    ], 

    function ($, _, Backbone, tmpl){

        var HomeView = Backbone.View.extend({
            
            id: "home",
            className: "row-fluid",
            tagName: "div",
            
            initialize: function () {
                
                this.template = _.template(tmpl);

                this.views = [];
            },

            render: function () {

                this.$el.html(this.template);

                return this;
            }
        });

        return HomeView;
    }
);