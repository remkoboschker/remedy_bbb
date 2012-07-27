define([
    "jquery",
    "lodash",
    "backbone",

    "text!templates/ip.html"
    ], 

    function ($, _, Backbone, tmpl){

        var IpView = Backbone.View.extend({
            
            id: "register",
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

        return IpView;
    }
);