define([
  "remedy",
  "records/record_router"
],

function(remedy, RecordRouter) {

  var Router = Backbone.Router.extend({

    routes: {
     
      "": "index"
    },

    initialize: function() {

      remedy.nav = new remedy.navView();
      remedy.nav.render();
      remedy.routers = {};
      remedy.routers.record = new RecordRouter("records/");
    },

    index: function () {

      this.navigate("records", {trigger: true}) 
    },
  });

  return Router;
});
