Feature: Monitor operations
    In order to keep track of on-going operations
    As a manager
    I want to see the processing of appointments take place

    Background:
        Given The indicators I want to keep track of for a particular day are:
        | number of appointments per physician           |
        | number of appointments processed per physician |
        | waiting times per physician                    |
        | availability of treatment rooms                |
        | calls being taken                              |
        | waiting times in the call-center               |
        | appointments being made                        |
        | questions being answered                       |
        | tasks overdue                                  |
