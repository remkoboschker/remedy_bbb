Feature: Make offer
    In order to avoid misunderstandings and to allow a client to reflect on the treatment and cost
    as a physician
    I want to make an offer available to the client
  
    Background: the offer is printed out for the customer
        Given the offer contains:
        | treatments to be performed |
        | products to be used        |
        | risks                      |
        | terms                      |
        | consent                    |
        | costs involved             |
        | discounts                  |
        | client details             |
        | name of physician          |
        | date of offer              |
        | signature                  |
        
    Scenario: I have just entered the conclusion

  
