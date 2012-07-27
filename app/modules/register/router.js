define([
    "jquery",
    "lodash",
    "backbone",
    "plugins/backbone.subroute",
    "register/views/home_view"
    ], 
    function ($, _, Backbone, BackboneSubroute, HomeView){

        var Router = Backbone.SubRoute.extend({

            routes: {
                "": "home"
            },

            initialize: function (options) {

            },

            home: function () {

                var view = new HomeView();

                this.showView(view);
            },

            showView: function (view) {

                try {

                    if (this.currentView) {

                        this.currentView.close();
                    }

                    this.currentView = view;
                    this.currentView.render();
                    $("#content").html(this.currentView.el);

                } catch (e) {
                    console.log(e);
                }
            }   
        });

        return Router;
    }
);
