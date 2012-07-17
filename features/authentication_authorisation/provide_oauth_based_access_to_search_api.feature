Feature: Provide oauth based access to search api
    In order to allow programs to search for a clients clientnumber
    as a developer
    I want to provide oauth based access to the search api
    
    With a valid access token the google sidebar app can post a query, for instance a lastname, to the api. The api returns all clients that match the query. The query must be at least two characters long. A matching client response item only contains first name, last name, date of birth, telephonenumber and clientnumber.
    
    Without a valid access token the api will respond with an access denied message

  

