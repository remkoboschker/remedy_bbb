Feature: Add treatment
    In order have an accurate history and comply with medical guidelines
    as a physician
    I want to record a treatment after I have performed it
    
    In the case of injectibles treatments are easily recorded by clicking on a picture of a face and entering the product and amount used.
  
    Background: the treatment is added in the context of an appointment. The treatment is added to a clients timeline. It copies the time, date, place and physician from the appointment. The appointment has a reference to the treatment
    
        Given the treatment part of the appointment record contains:
        | photos before            |
        | photos after             |
        | procedure                |
        | product                  |
        | amount                   |
        | area                     |
        | diagram                  |
        | part of offer            |
        | complications            |
        | other observations       |
        | apparatus or instruments |
        | folow up required        |
        
        
        
        | treatment type |
        | injections     |
        
        Given product
        | name         |
        | variation    |
        | batch number |
        | expiry date  |
        | producer     |
        | unit size    |
        
        Given injection

        | product            |
        | amount of product  |
        | injection location |

        Given injection location
        | injection location name |
        | coordinates on drawing  |


      
        Given amount of product
        | milliliters |

        
        Given injection location name

        | in het geval van middel is Botox     |
        | frons                                |
        | voorhoofd                            |
        | kraaienpootjes                       |
        | a nasi                               |
        | DAO                                  |
        | lippen                               |
        | masseter                             |
        | platysma                             |
        | oksels                               |
        | handen                               |
        | anders                               |
        | in het geval van middel is Restylane |
        | lippen                               |
        | NL-plooi                             |
        | frons                                |
        | neus                                 |
        | whole face                           |
        | wangen jukbeen                       |
        | wb                                   |
        | valley of tears                      |
        | bovenlip                             |
        | marionet                             |
        | kaaklijn                             |
        | hals                                 |
        | anders                               |
        | in het geval van middel is Sculptra  |
        | slapen                               |
        | jukbeen                              |
        | voorhoofd                            |
        | wangen                               |
        | anders                               |
        | in het geval van middel is Carboxy   |
        | ogen                                 |
        | hals                                 |
        | kaaklijn                             |
        | handen                               |
        | gezicht                              |
        | cellulitis                           |
        | huidverstrakking lichaam             |
        | striae                               |
        | anders                               |
        


  

      
  

  
