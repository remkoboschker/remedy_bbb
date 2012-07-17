Feature: Add notes
    In order to be flexible in recording any thoughts or obeservations that do not go into the official client record
    as a physician or consultant
    I want to add personal notes to a client record
    
    Background: in the context of a particular appointment        
        Given a comment model contains:
        | author  | employee                                    |
        | date    |                                             |
        | content |                                             |
        | access  | author, role, clinic, company, subject, all |
