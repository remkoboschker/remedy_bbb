define([
	"jquery",
	"lodash",
	"ledgers/models/ledger_row_model",
	"backbone",
	"plugins/backbone.localStorage"

	
	], 

	function ($, _, LedgerRowModel, Backbone){

		var StoreLedgerCollection = Backbone.Collection.extend({

  			model: LedgerRowModel,
  			
  			localStorage: new Backbone.LocalStorage("StoreLedger")
		});

		return StoreLedgerCollection;
	}
);