define([
  "remedy",
  "views/nav_view",
  "views/home_view",
  "views/policy_ip_view",
  "views/policy_privacy_view",
  "views/policy_terms_view",
  "views/helpdesk_view"
],

  function(remedy, NavView, HomeView, IpView, PrivacyView, 
                                    TermsView, HelpdeskView) {

    var Router = Backbone.Router.extend({

        routes: {

        // records subrouter
        // register subrouter
        // store subrouter

            "": "home",
            "regelingen/voorwaarden": "voorwaarden",
            "regelingen/ip": "ip",
            "regelingen/privacy": "privacy",
            "helpdesk": "helpdesk"
        },

        initialize: function() {

            new NavView({el: "#main"}).render();
        },

        home: function () {
            
            this.showView(new HomeView());
        },

        voorwaarden: function () {

            this.showView(new TermsView());
        },

        ip: function () {

            this.showView(new IpView());
        },

        privacy: function () {

            this.showView(new PrivacyView());
        },

        helpdesk: function () {

            this.showView(new HelpdeskView());
        },

        showView: function (view) {

            try {

                if (this.currentView) {
                    // close removes all events and dom elements
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
