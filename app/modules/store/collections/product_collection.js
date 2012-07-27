define([
    "jquery",
    "lodash",
    "stores/models/product_item_model",
    "backbone"
    ], 

    function ($, _, ProductItemModel, Backbone){

        var ProductCollection = Backbone.Collection.extend({

            model: ProductItemModel
        });

        return ProductCollection;
    }
);