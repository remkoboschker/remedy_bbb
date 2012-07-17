Feature: Restict access to any api to employees only
    In order to ensure client privacy and protect commercial interests
    as a manager
    I want to restrict access to information
    
    Initially all employees will have access to the same information. Later role-based or id-based access control can be implemented.
    
    Clients can make contact with server using two differtent protocols: http and websockets.
    
    It is not clear what websocket status code should be provided when the server closes the connection because of failure to authorize.
    
    Scenario: a request to an http api is made by an employee
         Given an user is authenticated
         And an user is an employee
         When he makes a valid api request
         Then request should be processed as intended
         
    Scenario: a request to an http api is made by an employee
         Given an user is authenticated
         And an user is not an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
    
    Scenario: a request to an http api is made by an employee
         Given an user is not authenticated
         And an user is an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
         
    Scenario: a request to an http api is made by an employee
         Given an user is not authenticated
         And an user is not an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
         
    Scenario: a request to a websockets api is made by an employee
         Given an user is authenticated
         And an user is an employee
         When he makes a valid api request
         Then request should be processed as intended
         
    Scenario: a request to an websockets api is made by an employee
         Given an user is authenticated
         And an user is not an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
    
    Scenario: a request to an websockets api is made by an employee
         Given an user is not authenticated
         And an user is an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
         
    Scenario: a request to an websockets api is made by an employee
         Given an user is not authenticated
         And an user is not an employee
         When he makes a valid api request
         Then a http 401 unauthorised response should be returned
    
         
 
    
    

  

