define([
	"jquery",
	"lodash",
	"backbone",
	"remedy",
	"ledgers/collections/sales_ledger_collection"
	],

	function ($, _, Backbone, remedy, SalesLedger) {

		var Ledgers = function () {
			
			var salesLedger = new SalesLedger();

			remedy.on("ledgers:addSale", function (saleInformation) {
				console.log(saleInformation);
			});

		};

		return Ledgers;
	}
);