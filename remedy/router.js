define([
  // Application.
  "remedy",
  "modules/record"
],

function(remedy, record) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {

      //routes handled by the remedy app framework
      "": "index",
      "saas" : "saas",
      "features" : "features",
      "policies" : "policies",
      "company" : "company",
      "contact" : "contact",


      //routes handled by modules

      "records/*subroute": "recordsRouter",
      //"admin/*subroute" : "callAdminRouter",
      //"support/*subroute" : "callSupportRouter",
      
      "*other": "other"
    },

    initialize: function() {
      // Set up the records.
      this.records = new Record.Collection();

      // Use main layout and set Views.
      remedy.useLayout("main");
      
      remedy.layout.setViews({

        "#client_record_personal": new Record.Views.Personal({
            collection: this.records;
        }),

        "#client_record_medicals": new Record.Views.Medicals({
            collection: this.records;
        }),

        "#client_record_ices": new Record.Views.Ices({
            collection: this.records;
        }),

        "#client_record_telecommunications": new Record.Views.Telecommunications({
            collection: this.records;
        }),

        "#client_record_addresses": new Record.Views.Addresses({
            collection: this.records;
        }),  
        
      });
    }


    index: function() {

      remedy.useLayout("main").render();
      var test = new record.Router("record/");
      console.log(remedy);
      
    },

    recordsRouter: function (subroute) {
      

      if(!remedy.Routers.records){
        remedy.record = {};
        remedy.record.router = new record.Router("record/");
      }
      
      console.log(remedy.record.router);
      
    },

    other: function() {

    },

  });

  return Router;

});
