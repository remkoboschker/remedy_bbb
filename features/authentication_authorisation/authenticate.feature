Feature: Authenticate
    In order to protect my account
    as an user
    I want to prevent others from accessing my account
    
    A valid certificate is issued by the appointed certificate authority, has not been revoked by that authority and has not expired.
    
    Scenario:   valid client certificate with my name present
        Given   I have a valid client certificate installed in my browser
        And     the client certificate has my name on it
        And     I do have an account
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should access my own account
        And     I should continue to the page I accessed
        And     I should be able to view my account name on the page
        
    Scenario:   valid client certificate with my name present but no account
        Given   I have a valid client certificate installed in my browser
        And     the client certificate has my name on it
        And     I do not have an account
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should not access any account
        And     I should receive a message informing me about a failure to authenticate
        And     I should be redirected to https://remedy.informatietuin.nl/
        
    Scenario:   valid client certificate with another employee's name present
        Given   I have a valid client certificate installed in my browser
        And     the client certificate has another employee's name on it
        And     he has an account
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should access his account
        And     I should continue to the page I accessed
        And     I should be able to view his account name on the page
        
    Scenario:   valid client certificate with another employee's name present but no account
        Given   I have a valid client certificate installed in my browser
        And     the client certificate has another employee's name on it
        And     he does not have an account
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should not access any account
        And     I should receive a message informing me about a failure to authenticate
        And     I should be redirected to https://remedy.informatietuin.nl/
    
    Scenario:   valid client certificate with no employee's name present
        Given   I have a valid client certificate installed in my browser
        And     the client certificate does not have an employee's name on it
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should not access any account
        And     I should receive a message informing me about a failure to authenticate
        And     I should be redirected to https://remedy.informatietuin.nl/
    
    Scenario:   no client certificate present
        Given   I do not have a client certificate installed in my browser
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should not access any account
        And     I should receive a message informing me about a failure to authenticate
        And     I should be redirected to https://remedy.informatietuin.nl/
        
    Scenario:   invalid client certificate present
        Given   I have an invalid client certificate installed in my browser
        When    I go to any page on https://remedy.informatietuin.nl/
        Then    I should not access any account
        And     I should receive a message informing me about a failure to authenticate
        And     I should be redirected to https://remedy.informatietuin.nl/