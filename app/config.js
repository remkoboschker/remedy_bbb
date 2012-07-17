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

    //modules
    records: "modules/records",
    stores: "modules/stores",
    ledgers: "modules/ledgers",
    nestCollection: "modules/nestCollection"

  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    //"plugins/backbone.layoutmanager": ["backbone"],
    "plugins/backbone.localStorage": ["backbone"],
    "plugins/backbone.validations": ["backbone"],
    "plugins/backbone.subroute": ["backbone"]
  }

});