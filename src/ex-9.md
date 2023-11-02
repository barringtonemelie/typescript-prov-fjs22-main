### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Generics är ett sätt att inte behöva definiera en typ i förväg utan att använda any, vilket är användbart om man inte vet vilken datatyp det kommer vara. Typen definieras dynamiskt, men samtidigt fångas det upp vilken datatyp det är, så ingen information går förlorad (till skillnad från om man skulle använda sig av any - då går informationen om datatypen förlorad).

Generics är bra eftersom koden blir återanvändbar, starkt typad och man får de
vanliga fördelarna med TS. 