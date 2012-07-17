Feature: Add photo to buffer
    In order to get photos in the buffer
    as an assistent
    I want to take photos
    
    Scenario: I take a photo with the camera
        Given the camera is connected to a computer
        When I take a photo
        Then that photo should be visible in the buffer
        
    Scenario: I do not take a photo with the camera
        Given the camer is connected to a computer
        When I do not tak a photo
        Then no photo should be added to the buffer

  

