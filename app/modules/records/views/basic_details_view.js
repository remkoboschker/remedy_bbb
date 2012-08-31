define([
	"jquery",
	"lodash",
	"backbone",
	//"helpers/input",
	"text!records/templates/basic_details.html"
	], 

	function ($, _, Backbone, tmpl){

		var PersonalView = Backbone.View.extend({

			tagName: "section",
			id: "personal",
			className: "",

			events: {

				"click tr": "toggleRow",
                "click input": "stopEvent",
                "keyup input": "processKeyup",
                "blur input": "toggleRow"
			},

			initialize: function () {
				
				this.template = _.template(tmpl);
			
				this.model.on("change", this.render, this);
			},

			render: function () {

				this.$el.html(this.template({

					givenName: this.model.get("givenName"),
					familyName: this.model.get("familyName"),
					dob: this.model.formDob(),
					age: this.model.age(),
					phone: this.model.formPhonePreferred(),
					mail: this.model.get("emailPreferred")

				}));
               
				return this;
			},

            stopEvent: function (event) {

                event.preventDefault();
                event.stopPropagation();

            },

            toggleInput: function (row) {

                var input = row.find("input");
                var key;
                var value;

                if (row.hasClass("input-visible")) {

                    if (input.length !== 0) {

                        key = input.data().key;
                        
                        value = input.val();
                        value = value.toString();
                        value = value.trim();

                        console.log(value);
                            
                        this.store(key, value, input);
                    }     
                        
                } else {

                  row.addClass("input-visible");
                  input.focus();
                }
            },

            store: function (key, value, input) {

                return this.model.save(key, value,
                    {
                        input: input,

                        error: function (model, response) {

                            response.input.addClass('error');
                            response.input.tooltip({
                                title: response.msg,
                                placement: 'right',
                                trigger: 'manual'
                            });
                            response.input.tooltip('show');
                        }
                    }
                );
            },
            
            toggleRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                this.toggleInput(row);
                
            },

            togglePreviousRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                row = row.previous(); 

                this.toggleInput(row);
            },

            toggleNextRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                row = row.next(); 

                this.toggleInput(row);

            },


            processKeyup: function (event) {

                // return saves the value and exits the input
                // shift + return does the same and moves to the
                // next field. If there are no more fields, it goes
                // to the next section on the page. No more sections,
                // it moves to the first
                if (event.keyCode === 13) {

                    this.toggleRow(event);

                    if (event.shiftKey) {

                        this.toggleNextRow(event);

                    } 
                }

                // tab on an input element saves and moves
                // to the next field. The default behaviour needs
                // to be intercepted to avoid the normal browser tab
                if (event.keyCode === 9) {

                    event.preventDefault();

                    this.toggleRow(event);
                    this.toggleNextRow(event);
                }

                // backspace moves the cursor one back and erases a char
                // shift+backspace saves the value and moves back a field
                // if there are no more fields it moves back a section. No
                // more sections, it moves to the last.
                if (event.keyCode === 8 && event.shiftkey) {

                    event.preventDefault();

                    this.toggleRow(event);
                    this.togglePreviousRow(event);
                }
                
            }
		});

		return PersonalView;
	}
);