<a id="appointment"></a>
## appointment
1. [physician or consultant](parties#employee)
2. date
3. time
4. room
5. clinic
6. purpose
7. status
8. [history](#history)
9. [examination](#examination)
10. [conclusion](#conclusion)
11. [treatment plan](#treatment_plan)
12. [treatment](#treatment)
13. [checkup](#checkup)
14. [comments](communications#comment)


<a id="intoxication"></a>
## intoxication
1. type [smoking, alcohol, drugs]
2. severity
3. frequency
4. stopped since

<a id="medication"></a>
## medication
1. name
2. amount
3. date start
4. date stop

<a id="medical_history"></a>
## medical history
1. speciality [internal medicine, cardiology, injectibles, facial sugery, lungs, neurology]
2. what is done
3. date
4. physician
5. [medical institution](parties#medical_institution)


<a id="treatment"></a>
## treatment
1. [treatment type](#treatment_type)
2. [injections](#injection)

<a id="checkup"></a>
## checkup
1. [complications](#complication)
2. [treatment](#treatment)
3. [appointment](communications#appointment)

<a id="complication"></a>
## complication
1. description

<a id="injection"></a>
## injection
1. [product](#product)
2. [amount of product](#amount_of_product)
3. [injection location](#injection_location)

<a id="injection_location"></a>
## injection location
1. [injection location name](#injection_location_name)
2. coordinates on drawing


<a id='alert'></a>
## alert
1. type [sensitivity, intollerance, allergy, pregnancy]
2. description [antibiotics, lidocaine, xylocaine, bruising]
3. source [patient, relative, physician]
4. reaction
5. severity

<a id="history"></a>
## history
1. description
2. symptom


<a id="examination"></a>
## examination
1. test
2. result


<a id="conclusion"></a>
## conclusion
1. description
2. active


<a id="treatment_plan"></a>
## treatment plan
1. description

<a id="treatment_type"></a>
## treatment type
1. description

<a id="product"></a>
## product
1. name
2. variation
3. batch number
4. expiry date
5. producer
6. unit size


<a id="amount_of_product"></a>
## amount of product
1. milliliters

<a id="injection_location_name"></a>
## injection location name

- in het geval van middel is Botox
  - frons
  - voorhoofd
  - kraaienpootjes
  - a nasi
  - DAO
  - lippen
  - masseter
  - platysma
  - oksels
  - handen
  - anders
- in het geval van middel is Restylane
  - lippen
  - NL-plooi
  - frons
  - neus
  - whole face
  - wangen jukbeen
  - wb
  - valley of tears
  - bovenlip
  - marionet
  - kaaklijn
  - hals
  - anders
- in het geval van middel is Sculptra
  - slapen
  - jukbeen
  - voorhoofd
  - wangen
  - anders
- in het geval van middel is Carboxy
  - ogen
  - hals
  - kaaklijn
  - handen
  - gezicht
  - cellulitis
  - huidverstrakking lichaam
  - striae
  - anders