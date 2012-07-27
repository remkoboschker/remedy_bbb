define([
  //template
  //"text!main.html",

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

function($, _, Backbone) {

  // Provide a global location to place configuration settings and module
  // creation.
  var remedy = {
    // The root path to run the application through.
    root: "/",
    modules: [],
    currentUser: "Remko"
  };

  // remove all references to a view
  Backbone.View.prototype.close = function(){

    this.remove();
    this.unbind();
    if (this.model){
      this.model.off(null, null, this);
    }
    if (this.collection){
      this.collection.off(null, null, this);
    }
    //recursively call the function on any subviews
    if (this.views){
        _.each(this.views, function (view) {
            view.close();
        });
    }
  };

  return _.extend(remedy, {}, Backbone.Events);
});
