Feature: Move photo from buffer to form
    In order to create a form containing good photos
    as an assistant
    I want to select photos from the buffer and add it to the form

    Scenario: there is a good photo to appoint it to an area in the form and the form is present
        Given a good photo in the buffer
        Given the appropriate form for the appointment type
        When I drag it to the right area in the form
        Then the photo should be visible in that area of the form
        And the photo should not be visible in the buffer
         
    Scenario: there is a photo in an area of the form, but I want to appoint another one
        Given there is a form
        Given there is a photo in a particular area of the form
        When I drag another photo to that same area of the form
        Then the first photo should return to the buffer
        And the second photo should be visible in that area of the form
 
   
  

