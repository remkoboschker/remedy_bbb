define([
	"jquery",
	"lodash",
	"records/views/records_view",
	"records/views/record_view",
	"records/collections/record_collection",
	"backbone",
	"plugins/backbone.subroute"
	], 
	function ($, _, RecordsView, RecordView, RecordCollection, Backbone){
		var Router = Backbone.SubRoute.extend({
			routes: {
				"": "index",
				":id": "setRecord",
				":id/:panel": "setRecord",
				":id/:panel/:item": "setRecord"
			},
			initialize: function () {
				this.views = {};
				this.collection = new RecordCollection();

				this.collection.fetch({
					success: function (collection, response) {

					},
					error: function (collection, response) {
						console.log("collection");
						console.log(collection);
						console.log("response");
						console.log(response);
					}
				});
			},
			index: function () {
				
				if (!this.views.recordsView) {
					this.view.recordsView = new RecordsView();
				}

				this.views.recordsView.collection = this.collection;				
	  			this.views.recordsView.render();
			},
			setRecord: function (id, panel, item) {
				//check input for valid format and existence
				if (!id) {
					id = 0;
				}

				if (!panel) {
					panel = "consults";
				}

				if (!item) {
					item = 0;
				}

				if (!this.views.recordView) {
					this.views.recordView = new RecordView();
				}

				this.views.recordView.model = this.collection.get(id);
				// set panel
				// set panel item
				tihs.views.recordView.render();

			}
		});

		return Router;
	}
);
