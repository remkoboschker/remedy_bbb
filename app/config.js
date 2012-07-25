// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone",
    text: "../assets/js/libs/text",
    requirebootstrap: "../assets/js/libs/bootstrap.min",

    //modules
    records: "modules/records",
    stores: "modules/stores",
    ledgers: "modules/ledgers",
    nest: "modules/nest"

  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    requirebootstrap: {
      deps: ["jquery"],
      exports: "jquery"
    },

    // Backbone.LayoutManager depends on Backbone.
    //"plugins/backbone.layoutmanager": ["backbone"],
    "plugins/backbone.localStorage": ["backbone"],
    "plugins/backbone.validations": ["backbone"],
    "plugins/backbone.subroute": ["backbone"]
  }

});
