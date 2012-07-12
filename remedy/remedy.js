define([
  //template
  "text!templates/main.html",

  // Libraries.
  "jquery",
  "lodash",
  "backbone",

  // Plugins.
  //"plugins/backbone.layoutmanager",
  "plugins/backbone.localStorage",
  "plugins/backbone.validations",
  "plugins/backbone.subroute"
],

function(navTemplate, $, _, Backbone) {

  // Provide a global location to place configuration settings and module
  // creation.
  var remedy = {
    // The root path to run the application through.
    root: "/"
  };

  remedy.navView = Backbone.View.extend({
    el: '#main',
    render: function () {
      var template;
      
      template = _.template(navTemplate);
      this.$el.html(template);

      return this;
    }

  });

  /*
  // Localize or create a new JavaScript Template object.
  var JST = window.JST = window.JST || {};

  // Configure LayoutManager with Backbone Boilerplate defaults.
  Backbone.LayoutManager.configure({
    paths: {
      layout: "remedy/templates/layouts/",
      template: "remedy/templates/"
    },

    fetch: function(path) {
      path = path + ".html";

      if (!JST[path]) {
        $.ajax({ url: "/" + path, async: false }).then(function(contents) {
          JST[path] = _.template(contents);
        });
      } 
      
      return JST[path];
    }
  });

  // Mix Backbone.Events, modules, and layout management into the remedy object.
  */
  return _.extend(remedy, {

    /*
    // Create a custom object with a nested Views object.
    module: function(additionalProps) {
      return _.extend({ Views: {} }, additionalProps);
    },

    // Helper for specific layouts.
    useLayout: function(name) {
      // If already using this Layout, then don't re-inject into the DOM.
      if (this.layout && this.layout.options.template === name) {
        return this.layout;
      }

      // If a layout already exists, remove it from the DOM.
      if (this.layout) {
        this.layout.remove();
      }

      // Create a new Layout.
      var layout = new Backbone.Layout({
        template: name,
        className: "layout " + name,
        id: "layout"
      });

      // Insert into the DOM.
      $("#main").empty().append(layout.el);

      // Render the layout.
      layout.render();

      // Cache the reference on the Router.
      this.layout = layout;

      // Return the reference, for later usage.
      return layout;
    }*/
  }, Backbone.Events);

});
