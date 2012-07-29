define([
    "jquery",
    "lodash",
    "backbone",
    "records/config",
    //"helpers/input",
    "text!records/templates/other_details.html",
    "text!records/templates/details_menu_item.html",
    "text!records/templates/other_details_item.html",
    "text!records/templates/address.html",
    "text!records/templates/ice.html"
    ], 

    function ($, _, Backbone, config, 
                tmpl, menuTmpl, detailTmpl, addressTmpl, iceTmpl) {

        var AddressesView = Backbone.View.extend({

            tagName: "section",
            className: "",
            id: "otherDetails",

            events: {

                "click ul#addMenu": "addItem",
                "click ul#removeMenu": "removeItem",
                "click tr": "toggleRow",
                "click input": "stopEvent",
                "keyup input": "processKeyup",
                "blur input": "onBlurInput"
                
            },

            initialize: function () {
                
                this.template = _.template(tmpl);
                this.menuTmpl = _.template(menuTmpl);
                this.detailsTmpl = _.template(detailTmpl);
                this.addressTmpl = _.template(addressTmpl);
                this.iceTmpl = _.template(iceTmpl);

                this.model.on("change", this.render, this);
            },

            render: function () {

                this.$el.html(this.template());

                // config.key: {label, type, placeholder, required, basis}

                _.each(config, function (settings, key) {

                    var dataset;

                    if (!settings.required) {

                        if (this.model.has(key)) {

                            this.$("#removeMenu").append(
                                this.menuTmpl({
                                    key: key,
                                    label: settings.label
                                })
                            );
                        } else {

                            this.$("#addMenu").append(
                                this.menuTmpl({
                                    key: key,
                                    label: settings.label
                                })
                            );
                        }
                    }

                    if (!settings.basic && this.model.has(key)) {

                        if (settings.type === "address") {

                            // nested model
                            dataset = this.model[key].toJSON();
                            dataset.model = key;
                            dataset.label = settings.label;

                            this.$("tbody").append(this.addressTmpl(dataset));

                        } else if (settings.type === "ice") {
                        
                            // nested model
                            dataset = this.model[key].toJSON();
                            dataset.model = key;
                            dataset.label = settings.label;

                            this.$("tbody").append(this.iceTmpl(dataset));

                        } else {

                            this.$("tbody").append(
                                this.detailsTmpl({
                                    label: settings.label,
                                    key: key,
                                    value: this.model.get(key)
                                })
                            );
                        }   
                    }

                }, this);

                return this;
            },

            addItem: function (event) {

                var key;
                var settings;

                event.preventDefault();

                key = event.target.dataset.key;
                settings = config[key];

                if (settings.type === "address") {

                    this.model.addAddress(key);
                    this.model.save();

                } else {
                  
                    this.model.set(key, settings.placeholder);
                    this.model.save();
                }  
                
            },

            removeItem: function (event) {

                var key;
                var settings;

                event.preventDefault();

                key = event.target.dataset.key;
                settings = config[key];

                if (settings.type === "address") {

                    this.model.unset(key);
                    this.model.save();
                    delete this.model[key];
                    

                } else {
                  
                    this.model.unset(key);
                    this.model.save();
                }  
                

                console.log(this.model);
            },

            stopEvent: function (event) {

                event.preventDefault();
                event.stopPropagation();
            },

            storeInput: function (element) {

                var key = element.dataset.key;
                var nestedModel = element.dataset.model;
                var value = element.value;
                var model;

                if (nestedModel) {

                    model = this.model[nestedModel];
    
                } else {

                    model = this.model;
                }

                if (model.get(key) !== value) {

                    model.set(key, value);
                    this.model.save();
                }
            },

            toggleRowVisibility: function (row) {


                if (row.hasClass("input-visible")) {

                    _.each(row.find("input"), function (element) {

                        this.storeInput(element);

                    }, this);
                        
                    row.removeClass("input-visible");

                } else {

                    row.addClass("input-visible");
                    row.find("input").first().focus();
                }
            },

            toggleRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                this.toggleRowVisibility(row);
                
            },

            onBlurInput: function (event) {

                // if a sister element has focus
                // do not toggle row
                //if ($(event.target).siblings("input:focus").length === 0) {

                //    this.toggleRow(event);
                //}
            },

            togglePreviousRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                row = row.previous(); 

                this.toggleRowVisibility(row);
            },

            toggleNextRow: function (event) {

                var target = $(event.target);
                var row = target.parents("tr");

                row = row.next(); 

                this.toggleRowVisibility(row);

            },


            processKeyup: function (event) {

                // return saves the value and exits the input
                // shift + return does the same and moves to the
                // next field. If there are no more fields, it goes
                // to the next section on the page. No more sections,
                // it moves to the first
                if (event.keyCode === 13) {

                    
                    if ($(event.target).siblings("input").length === 0) {

                        this.toggleRow(event);
                    }

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

        return AddressesView;
    }
);