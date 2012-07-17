Feature: New appointment
    In order have appointments with clients
    as an assistant
    I want to add a new appointment to the queue

    Background: the appointment model
        Given the appointment model consists of:
        | physician or consultant |
        | client                  |
        | date                    |
        | time                    |
        | room                    |
        | clinic                  |
        | purpose                 |
        | status                  |
        
        Given the following items can be added in the context of an appointment:
        | history                 |
        | examination             |
        | conclusion              |
        | treatment plan          |
        | treatment               |
        | checkup                 |
        | comments                |
        
    Scenario: an appointment has been made
        

  
