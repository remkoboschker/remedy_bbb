Feature: Add new client
    In order to register new clients
    as an assistant
    I want to add a new client
    
    A * means that the information has to be entered, not entering it will result in a warning each time the record is viewed. It is possible to save it.  
    
    Timeline, offers, client account and comments are added at a different place in the application, at a different time. Therefore these are not part of the add new client feature.
    
  
    Background: the client details
        Given a client record contains:
        | person          | * |
        | telecom         | * |
        | address         | * |
        | insurance       | * |
        | alerts          | * |
        | intoxications   | * |
        | medication      | * |
        | medical history | * |
        | physician       | * |
        | timeline        |   |
        | offers          |   |
        | client account  |   |
        | comments        |   |
        
        Given a person model contains:
        | initials      |                               | * |
        | given name    |                               | * |
        | family name   |                               | * |
        | date of birth |                               | * |
        | sex           | male, female, other           | * |
        | id number     | burger service nummer         | * |
        | id document   | scan of document              | * |
        | passphoto     | add photo through foto module | * |
        
        Given a telecom model contains:
        | tel                 | * |
        | mail                |   |
        | ice                 |   |
        | www                 |   |
        | telecom preferences |   |
        
        Given a tel model contains:
        | type      | private, work |   |
        | number    | ITU e.164     | * |
        | preferred | yes, no       |   |
        
        Given a mail model contains:
        | type      | private, work |   |
        | address   |               | * |
        | preferred | yes, no       |   |
        
        Given an ice model contains:
         | name     |                                                                     |   |
         | tel      |                                                                     | * |
         | relation | married, sibling, child, parent, friend, kin, boy_girlfriend, other |   |
         
        Given an www model contains
        | type | twitter, facebook, blog, website | * |
        | url  |                                  | * |

        Given a telecom preferences model contains:
        | languages            |                                        |
        | sight impairment     | none, mild, moderate, severe, profound |
        | hearing impairment   | none, mild, moderate, severe, profound |
        | speach impairment    | none, mild, moderate, severe, profound |
        | cognitive impairment | none, mild, moderate, severe, profound |
        | literacy impairment  | none, mild, moderate, severe, profound |

        Given an address model contains:
        | type        | private, work, billing, delivery, visiting | * |
        | street      |                                            | * |
        | number      |                                            | * |
        | extension   | a-z, roman numeral, hs, floor              | * |
        | postal code | 1234 AB                                    | * |
        | city        |                                            | * |
        | country     |                                            |   |
        
        Given an insurance model contains:
        | insurance company name | * |
        | insurance number       | * |
        
        Given an alert model contains:
        | type             | sensitivity, intollerance, allergy, pregnancy | * |
        | description      | antibiotics, lidocaine, xylocaine, bruising   | * |
        | source           | patient, relative, physician                  |   |
        | reaction         |                                               |   |
        | severity         |                                               |   |
        | currently active | yes, no                                       | * |
        
        Given an intoxication model:
        | type          | smoking, alcohol, drugs | * |
        | severity      |                         |   |
        | frequency     |                         |   |
        | stopped since |                         |   |
        
        Given a medication model:
        | name       | * |
        | amount     |   |
        | date start | * |
        | date stop  |   |
        
        Given a medical history model:
        | speciality          | internal medicine, cardiology, injectibles, facial sugery, lungs, neurology | * |
        | problem             |                                                                             |   |
        | treatment           |                                                                             |   |
        | date                |                                                                             | * |
        | physician           |                                                                             |   |
        | medical institution |                                                                             |   |

                
    Scenario: the id number, insurance number, birhtday - name or postalcode - name combination already exists 
    
    Scenario: the client does not have required all details
    
    Scenario: the client does not have an id document
    
    Scenario: the client does not have an insurance card
    

      

  
