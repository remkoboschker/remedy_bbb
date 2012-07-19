



var date = new Date();
				date = date.toISOString();

				console.log(remedy);

				remedy.trigger("ledgers:addSale", {
					date: date,
					credit: true,
					enteredBy: remedy.currentUser,
					amount: 100.00,
					description: "test",
					group: "PIN"
				});