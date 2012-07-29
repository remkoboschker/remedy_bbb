define([],
    function () {

        var config = {
            givenName: {
                label: "voornaam",
                type: "basic",
                placeholder: "voornaam",
                required: true,
                basic: true
            },
            familyName: {
                label: "achternaam",
                type: "basic",
                placeholder: "achternaam",
                required: true,
                basic: true
            },
            dateOfBirth: {
                label: "geboortedatum",
                type: "basic",
                placeholder: "1901-01-01",
                required: true,
                basic: true
            },
            phonePreferred: {
                label: "verkeurs telefoon",
                type: "basic",
                placeholder: "00-00-000000",
                required: true,
                basic: true
            },
            emailPreferred: {
                label: "voorkeurs email",
                type: "basic",
                placeholder: "mail@provider.com",
                required: true,
                basic: true
            },
            ice: {
                label: "ice",
                type: "ice",
                placeholder: "ice",
                required: true,
                basic: false    
            },
            homeAddress: {
                label: "thuis adres",
                type: "address",
                placeholder: "thuis adres",
                required: true,
                basic: false
            },
            sex: {
                label: "geslacht",
                type: "basic",
                placeholder: "geslacht",
                required: false,
                basic: false
            },
            workEmail: {
                label: "werk email",
                type: "basic",
                placeholder: "werk email",
                required: false,
                basic: false
            },
            privateEmail: {
                label: "prive email",
                type: "basic",
                placeholder: "prive email",
                required: false,
                basic: false
            },
            workPhone: {
                label: "werk telefoon",
                type: "basic",
                placeholder: "werk telefoon",
                required: false,
                basic: false
            },
            privatePhone: {
                label: "prive telefoon",
                type: "basic",
                placeholder: "prive telefoon",
                required: false,
                basic: false
            },
            facebook: {
                label: "Facebook",
                type: "basic",
                placeholder: "Facebook",
                required: false,
                basic: false
            },
            twitter: {
                label: "Twitter",
                type: "basic",
                placeholder: "Twitter",
                required: false,
                basic: false
            },
            linkedin: {
                label: "LinkedIn",
                type: "basic",
                placeholder: "LinkedIn",
                required: false,
                basic: false
            },
            website: {
                label: "website",
                type: "basic",
                placeholder: "website",
                required: false,
                basic: false
            },    
            workAddress: {
                label: "werk adres",
                type: "address",
                placeholder: "werk adres",
                required: false,
                basic: false
            }, 
            deliveryAddress: {
                label: "aflever adres",
                type: "address",
                placeholder: "aflever adres",
                required: false,
                basic: false
            }, 
            billingAddress: {
                label: "factuur adres",
                type: "address",
                placeholder: "factuur adres",
                required: false,
                basic: false
            },
            idNumber: {
                label: "BSN",
                type: "basic",
                placeholder: "BSN",
                required: false,
                basic: false
            }, 
            idDocumentNr: {
                label: "legitimatie nr",
                type: "basic",
                placeholder: "legitimatie nr",
                required: false,
                basic: false
            }, 
            idDocumentScr: {
                label: "scan legitmatie",
                type: "basic",
                placeholder: "scan legitmatie",
                required: false,
                basic: false
            }, 
            insuranceCompany: {
                label: "verzekeraar",
                type: "basic",
                placeholder: "verzekeraar",
                required: false,
                basic: false
            }, 
            insuranceNumber: {
                label: "polisnummer",
                type: "basic",
                placeholder: "polisnummer",
                required: false,
                basic: false
            } 
        };

        return config;
    }
);