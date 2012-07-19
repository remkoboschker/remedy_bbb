define([
    "jquery",
    "lodash",
    "remedy",
    "records/collections/record_collection",
    "records/views/records_view",
    "records/views/record_view",
    "backbone",
    "plugins/backbone.subroute"
    ], 
    function ($, _, remedy, RecordCollection, RecordsView, RecordView, Backbone){
        var Router = Backbone.SubRoute.extend({
            routes: {
                "": "showRecords",
                ":id": "showRecord",
                ":id/:panel": "showRecord",
                ":id/:panel/:item": "showRecord"
            },

            initialize: function (options) {

                this.collection = new RecordCollection();
                this.collection.fetch();
                this.collection.on("selected", this.selectRecord, this);
            },

            showRecords: function () {

                var view;
                view = new RecordsView({collection: this.collection});
                this.showView(view);
            },

            showRecord: function (id, panel, item) {
                var view;
                var record;
                var idRegEx = /^[\d]+$/;
                var cidRegEx = /^[\w]{8}\-[\w]{4}\-[\w]{4}\-[\w]{4}\-[\w]{12}$/;

                try {
                    if (id.match(idRegEx) || id.match(cidRegEx)) {
                        
                        record = this.collection.get(id);

                        if (record) {
                            
                            view = new RecordView({model: record});
                            this.showView(view);
                        
                        } else {
                            throw new Error("showRecord: record does not exist");
                        }
                    } else {
                        throw new Error("showRecord: invalid record-id format");
                    }
                } catch (e) {
                    console.log(e);
                }
                


                /*
                // first check for a valid record id (or cid)
                // then check if the record exists
                
                
                if (!panel) {
                    panel = "consults";
                }

                if (!item) {
                    item = 0;
                }*/

                
                
            },

            showView: function (view) {

                try {

                    if (this.currentView) {

                        this.currentView.close();
                    }

                    this.currentView = view;
                    this.currentView.render();
                    $('#content').append(this.currentView.el);

                } catch (e) {
                    console.log(e);
                }
            },
            
            selectRecord: function (id) {
                
                if (id) {
                    this.showRecord(id);
                    this.navigate("records/" + id);
                }
            }
                
        });

        return Router;
    }
);
