define([
  "remedy",
  "records/record_router",
  "ledgers/ledgers",
  "records/records"
],

  function(remedy, RecordRouter, Ledgers, Records) {

    var Router = Backbone.Router.extend({

      routes: {
       
        "": "index"
      },

      initialize: function() {

        var nav = new remedy.navView();
        nav.render();

        this.subrouters = {};

        remedy.modules.push(new Ledgers());
        remedy.modules.push(new Records());

      },

      index: function () {

        this.navigate("records", {trigger: true}); 
      }
    });

    return Router;
  }
);
