define([
	"lodash",
	"backbone",
	"plugins/backbone.subroute"
	], 

	function (_, Backbone){

		var Router = Backbone.SubRoute.extend({
			routes: {
				"": "index",
				":id": "defaultPanel",
				":id/:panel": "selectPanel",
				":id/:panel/:item": "selectItem",
			},

			initialize: function () {
				console.log('new recordRouter');
				console.log(this);
			},

			index: function () {
				console.log("index");
			},

			defaultPanel: function (id) {
				console.log("record nummer: " + id);
			},

			selectPanel: function (id, panel) {
				console.log("record nummer: " + id);
				console.log("panel naam: " + panel);
			},

			selectItem: function (id, panel, item) {
				console.log("record nummer: " + id);
				console.log("panel naam: " + panel);
				console.log("item nummer: " + item);
			},

			other: function () {
				console.log("other");
			},
		})

		return Router;
});
