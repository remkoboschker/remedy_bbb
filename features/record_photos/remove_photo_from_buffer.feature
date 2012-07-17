Feature: Remove photo from buffer
    In order to keep the buffer usefull
    as an assistant
    I want to remove a photo from the buffer
    
    Scenario: I remove one photo from the buffer
        Given the photo I want to remove is in the buffer
        When I drag a photo in the buffer to the bin
        Then the photo should no longer be visible in the buffer
        
    Scenario: I want to clear the buffer
        Given there are photos in the buffer
        When I click on 'clear'
        Then there should be no photos in the buffer
        
    Scenario: I want to restore a photo from the bin
        Given a photo is in the bin
        When I click on the bin
        Then I should see a thumbnail view of the photos in the bin
        When I drag a photo from the bin overview to the buffer
        Then the photo should be in the buffer
        
    Scenario: I want to clear the bin
        Given there are photos in the bin
        When I click on the bin
        And I click on 'empty'
        Then there should be no more photos in the bin
        

  

