Feature: Add comment to record
    In order to have somewhere to write down an observation or memo
    as an assistent, physician, manager, callcenter agent
    I want add a comment to a record
    
    Background: in the context of a particular client
        Given I have the right record in front of me
        
        Given a comment model contains:
        | author  | employee                                    |
        | date    |                                             |
        | content |                                             |
        | access  | author, role, clinic, company, subject, all |
        

  
