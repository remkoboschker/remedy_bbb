Feature: Google calendar sidebar gadget
    In order to value
    as a role
    I want feature

  


1. De afspraken moeten opgehaald worden uit de agenda, zodat ze in het dossier en in de wachtrij terecht komen.

2. In de agenda moeten klanten opgezocht kunnen worden, zodat je kunt checken of de klant al bekend is en wat zijn of haar klantnummer is.

De eerste is niet zo moeilijk. Maar omdat er geen velden in de agenda zijn voor klantnummer, reden, type enzovoorts, moeten deze in de titel of de beschrijving opgenomen worden. Een gevaar is daarbij, zoals je voorbeeld laat zien, dat de gegevens niet altijd hetzelfde ingevoerd worden. Hierdoor kan een afspraak aan een verkeerd dossier gekoppeld worden of kan het zo zijn dat niet alle gegevens goed doorkomen. Daarom is het tweede van belang.

Want als je namelijk een klant eerst op kunt zoeken, dan kun je een uniek nummer doorgeven en aan vinken wat de reden en type moeten zijn. Dit kan in principe door een klein applicatietje in te voegen in de google calendar pagina. Dit noemen ze bij Google een Calendar Sidebar Gadget. Deze gadget kan geen nieuwe afspraken maken, maar wel een nieuwe afspraak venster openen en daar al velden invullen. Dus met een beetje passen en meten kunnen we daar wel uitkomen denk ik.

De stappen voor een nieuwe afspraak aanmaken worden dan:

1. klant zoeken in sidebar gadget
2. klant selecteren
3. type (consult, behandeling, controle) aanvinken
4. reden invullen of uit een lijstje kiezen
5. aanmaken aanklikken
6. dan opent het google "create event" formulier zich; dit is het zelfde formulier als je in google calender links boven op "maken" of "create" klikt.
7. in het formulier zijn dan bij de titel al naam, telefoonnummer, geboortedatum, type en reden ingevuld.
8. in het formulier bij het tab-je "afspraak gegevens" zijn in de beschrijving een voor de server leesbare beschrijving van type, reden en klantnummer ingevuld.
9. in het formulier bij het tab-je "tipstip uitzoeken" kan dan het tijdstip met de klant worden uitgezocht.
10. opslaan en klaar.

Als het om een nieuwe klant gaat. Kan er ook een knopje nieuwe klant aangeklikt worden. Dan moeten naam en telefoonnummer ingevuld worden en wordt er gelijk een nieuw klantnummer aangemaakt.

De nieuwe afspraken kunnen bijvoorbeeld elk half uur opgehaald worden en toegevoegd aan de dossiers en/of wachtrij.

Ik heb in alle zoek functies nu de postcode opgenomen. Kan ik er van uit gaan dat jullie dat niet gebruiken, maar telefoonnummer en / of geboortedatum gebruiken om te checken of een klant de goede is? 
=========ursula========
Qua integratie calender is je verhaal heel duidelijk. Volgens mij heb je zo alles ondervangen en is dit de perfecte oplossing. Qua handelingen valt het allemaal mee. Sterker, bij bestaande klanten wordt het zelfs minder invulwerk als ik het goed begrijp!
Kan ik onze huidige versie van de google calender blijven gebruiken of moet ik een zakelijke account aanmaken ivm die extra functies?

Klopt dat we in eerste instantie zoeken op naam (voornaam en/of achternaam, telefoonnummer). Niet op postcode.
Geboortedatum staat nu nog niet altijd ingevoerd, maar wil ik wel graag doorvoeren, dus graag ook een zoekoptie hierop inderdaad.

Zolang remedy en google calender online zijn, wordt alles direct (per half uur) ge-update begrijp ik, niet alleen nieuwe afspraken, maar ook wijzigingen/annuleringen/no-shows.
Wijzigingen van afspraken worden direct doorgevoerd, waarbij agenda is aangepast en de wijziging aan 'logboek' van profiel vd klant toegevoegd wordt.
Hoe zijn een annulering / no show zichtbaar in de calender en hoe wordt dit verwerkt in klantprofiel? Annulering = afspraak die afgemeld is, no-show = afspraak die niet afgemeld is (dus qua tijd tzt 'verloopt')

====remko===============


De google agenda heeft een naar mijn smaak nogal rigide afspraak structuur. Alleen als er via de mail een uitnodiging is opgezet en een genodigde is toegevoegd aan de spraak, kan een afspraak de status confirmed, tentative of cancelled hebben. Je ziet bij cancelled (wanneer een genodigde de afspraak weigert) een streep door de afspraak, wat mooi is. 

Ik zie in de interface niet hoe je anders dit kunt bereiken. Het is wel mogelijk om ook dit via een gadget aan te passen. Als een afspraak wordt ge-cancelled na het tijdstip dat de afspraak had moeten beginnen (of een andere te configureren tijd bijvoorbeeld op dezelfde dag), dan is het een no-show. Dit geeft mooi in de agenda weer dat er iets aan de hand is, maar laat geen onderscheid zien tussen een annulering of een no-show. Dit is wel in het dossier van de klant te zetten. Het is ook mogelijk om de afspraak een kleur code te geven en op die manier aan te geven dat het om een no-show gaat. Mijn voorstel is om een cancel knop op te nemen in de gadget die een streep haalt door een geselecteerde afspraak.

In de afspraken in het dossier van een klant kunnen we een status aangeven. Mogelijk statussen zijn dan: ingeboekt, gewijzigd, geannuleerd, no-show. Deze toestanden zijn afhankelijk van de status (confirmed, tentative of cancelled) en het verschil tussen de tijd waarop de afspraak is aangemaakt en de afspraak is gewijzigd in de google agenda. De 'created' en 'updated' tijden kan ik ook in de interface laten zien, maar ik denk dat het weinig toevoegt en de boel wel nog drukker maakt. Om dezelfde reden zou ik "ingeboekt" ook weglaten en het alleen laten zien als een afspraak is gewijzigd, geannuleerd of no-show. 


Over een meta-gegevens veld

Met meta-gegevens bedoel ik gegevens over een klant die niet direct met het primaire proces te maken hebben, maar waar je eenvoudig kunt inzien wat voor klant het is. In eerste instantie denk ik dan aan:
totaal bedrag besteed
gemiddeld besteed per kwartaal
aantal afspraken gehad
aantal afspraken zonder wijziging
aantal afspraken gewijzigd
aantal afspraken ge-annuleerd
