define([
  "remedy",
  "records/records",
  "ledgers/ledgers"
],

function(remedy, Records, Ledgers) {

  var Router = Backbone.Router.extend({

    routes: {
     
      "": "index"
    },

    initialize: function() {

      var nav = new remedy.navView();
      nav.render();
      remedy.modules.push(new Records(remedy));
      remedy.modules.push(new Ledgers(remedy));
      console.log(remedy.modules);
    },

    index: function () {

      this.navigate("records", {trigger: true}) 
    },
  });

  return Router;
});
