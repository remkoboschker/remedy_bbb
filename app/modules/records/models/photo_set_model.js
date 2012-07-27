define([
    "jquery",
    "lodash",
    "backbone",
    "helpers/nestCollection",
    "records/collections/photo_collection"
    ],

    function ($, _, Backbone, nestCollection, PhotoCollection) {

        var PhotoSetModel = Backbone.Model.extend({

            //simple attributes get a default value
            defaults: {
                type: "",
                photographer: "",
                datetime: ""
            },

            initialize: function () {

                this.photos = nestCollection(this, 'photos',
                        new PhotoCollection(this.get('photos')));
                this.photos.add();
            }

        });
    
        return PhotoSetModel;
    }
);