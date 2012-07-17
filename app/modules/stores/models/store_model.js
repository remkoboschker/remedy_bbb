define([
	"jquery",
	"lodash",
	"backbone",
	"nestCollection/nestCollection",
	"records/collections/product_collection"
	],

	function ($, _, Backbone, nestCollection) {

		var StoreModel = Backbone.Model.extend({

			defaults: {
				"producer": "",
				"name": "",
				"variation": "",
				"level": "",
				"price": "",
				"initialAmount": "",
				"purchasePrice": "",
				"purchaseDate": "",
				"purchaseOrder": ""
			},

			initialize: function () {
				this.products = nestCollection(this, 'products',
			    		new Products(this.get('products')));
				this.products.add();
			}

		});
	
		return StoreModel;
	}
);