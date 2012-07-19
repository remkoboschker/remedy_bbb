define([
    "jquery",
    "lodash",
    "backbone"
    ],

    function ($, _, Backbone) {

        var ReceiptModel = Backbone.Model.extend({

            defaults: {
                date: "",
                number: "",
                issuer: "",
                treatments: "",
                offer: "",
                discount: "",
                pricingmodel: "",
                paid: false,
                paymentMethod : "",
                vatRate: "",
                vat: "",
                subtotal: "", // ex vat
                total: "",
                issued: false, // was the receipt given to the client
                receivedBy: "" // who got the money
            },

            initialize: function () {
                this.setDate();
                this.setNumber();
                this.setIssuer();
                this.setDiscount();
                this.setPricingmodel();
            },

            setDate: function () {},

            setNumber: function () {},

            setIssuer: function () {},

            setDiscount: function () {
                this.discount = this.getDiscountFromOffer();
            },


            setPricingmodel: function () {
                this.pricingmodel = this.getPricingmodelFromOffer();
            },

            getDiscountFromOffer: function () {},

            getPricingmodelFromOffer: function () {}
        });
    
        return ReceiptModel;
    }
);