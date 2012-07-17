define([
	"jquery",
	"lodash",
	"ledgers/models/ledger_row_model",
	"backbone",
	"plugins/backbone.localStorage"

	
	], 

	function ($, _, LedgerRowModel, Backbone){

		var CashLedgerCollection = Backbone.Collection.extend({

  			model: LedgerRowModel,
  			
  			localStorage: new Backbone.LocalStorage("CashLedger")
		});

		return CashLedgerCollection;
	}
);