Feature: Block access of unauthenticated users to api's
    In order to secure any information stored in the database
    as a user
    I want that users that are not authenticated can not connect to any api
    
    The api's are: records, record search, messages, calendar, accounting
    
    Scenario: an authenticated user accesses an api
        Given the request is made by an authenticated user (session)
        When a request is made to an api
        Then the request should be processed by the api
    
    Scenario: an unauthenticated user accesses an api
        Given the request is made by an authenticated user (session)
        When a request is made to an api
        Then the request should not be processed by the api
        
    
    

  

