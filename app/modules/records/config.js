define([],
    function () {

        var config = {
            required: {
                givenName: "voornaam",
                familyName: "achternaam",
                dateOfBirth: "1901-01-01",
                phonePreferred: "00-00-000000",
                emailPreferred: "mail@provider.com",
                ice: "ice",
                homeAddress: "thuis adres"
            },
            nonRequired: {
                sex: "geslacht",
                workEmail: "werk email",
                privateEmail: "prive email",
                workPhone: "werk telefoon",
                privatePhone: "prive telefoon",
                facebook: "Facebook",
                twitter: "Twitter",
                linkedin: "LinkedIn",
                website: "website",    
                workAddress: "werk adres",
                deliveryAddress: "aflever adres",
                billingAddress: "factuur adres",
                idNumber: "BSN",
                idDocumentNr: "legitimatie nr",
                idDocumentScr: "scan legitmatie",
                insuranceCompany: "verzekeraar",
                insuranceNumber: "polisnummer"
            },
            basicPersInf: {
                givenName: "voornaam",
                familyName: "achternaam",
                dateOfBirth: "1901-01-01",
                phonePreferred: "0000000000",
                emailPreferred: "mail@provider.com"
            },
            otherPersInf: {
                ice: "ice",
                homeAddress: "thuis adres",
                sex: "geslacht",
                workEmail: "werk email",
                privateEmail: "prive email",
                workPhone: "werk telefoon",
                privatePhone: "prive telefoon",
                facebook: "Facebook",
                twitter: "Twitter",
                linkedin: "LinkedIn",
                website: "website",    
                workAddress: "werk adres",
                deliveryAddress: "aflever adres",
                billingAddress: "factuur adres",
                idNumber: "BSN",
                idDocumentNr: "legitimatie nr",
                idDocumentScr: "scan legitmatie",
                insuranceCompany: "verzekeraar",
                insuranceNumber: "polisnummer"
            }
        };

        return config;
    }
);