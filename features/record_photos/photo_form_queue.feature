Feature: Photo form queue
    In order to easily add photos to records
    as an assistant
    I want to select a form for the required photo from the queue that has the client details entered
    
    Background:
        Given the correct form appointment combinations are:
        | appointment type | photo form type |
        | consultation     | ...             |
        
    
    Scenario: the right form is in the queue containing the clients name and passphoto
        Given a photo form queue element with the clients name and passphoto
        Given the form type is correct
        When I click on the queue element representing the form
        Then the entire form should become visible
    
    Scenario: the wrong form is in the queue containing the clients name and passphoto
        Given a photo form queue element with the clients name and passphoto
        Given the form type is not correct
        When I click on the form type element
        Then it should be possible to select the right form type
    
    Scenario: the entire form is visible and the form type is not correct
        Given the form has been selected and is visible
        Given the form does not have the right form type for the appointment
        When I click on the form type element
        Then it should be possible to select the right form type
        And the display of the form should change accordingly 
        
    
    Scenario: no form is in the queue for the client
    
    Scenario: I want to search the queue
    
    Scenario: I want to browse the queue

  
