define([
	"jquery",
	"lodash",
	"remedy",
	"records/views/records_view",
	"records/views/record_view",
	"backbone",
	"plugins/backbone.subroute"
	], 
	function ($, _, remedy, RecordsView, RecordView, Backbone){
		var Router = Backbone.SubRoute.extend({
			routes: {
				"": "showRecords",
				":id": "showRecord",
				":id/:panel": "showRecord",
				":id/:panel/:item": "showRecord"
			},
			initialize: function () {
				//this.collection.on("selected", this.selectRecord, this);
			},
			showRecords: function () {
				var view;
				this.collection.fetch();
				view = new RecordsView({
						collection: this.collection,
						proxy: this.proxy});
				this.showView(view);
			},
			showRecord: function (id, panel, item) {
				var view;
				var record;
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

				record = this.collection.get(id);
				console.log(record);
				view = new RecordView({
						model: record,
						proxy: this.proxy});
				this.showView(view);
			},
			showView: function (view) {

			    if (this.currentView) {
			      this.currentView.close();
			    }

			    this.currentView = view;
			    this.currentView.render();
			    console.log(this.currentView.el);
			    $('#content').html(this.currentView.el);
			},
			selectRecord: function () {
				var id = this.collection.selected;
				
				if (id) {
					console.log(this.collection.get(id));
					this.navigate(id);
					this.showRecord(id);
				}
			}
				
		});

		return Router;
	}
);
