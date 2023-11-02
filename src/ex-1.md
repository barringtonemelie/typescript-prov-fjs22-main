### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.


1. Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng

    TypeScript är ett typat superset till JavaScript, som möjliggör användningen av statiska typer i JavaScript (som ju vanligtvis är dynamiskt typat). 

2. Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng

    Med TypeScript kan man upptäcka error i typningen m.m. utan att köra koden, så kallat "static type checking". Detta underlättar utveckling med TS och gör att man tidigare kan upptäcka och åtgärda/förebygga buggar, vilket i sin tur leder till stabilare applikationer. Man får tack vare detta också mer information om sin kod direkt i sin utvecklingsmiljö (IDE). TS underlättar också för utvecklare att skriva kod som är mer "maintainable" eftersom TS främjar tydlig struktur i koden.  
    En nackdel med TypeScript är att man som utvecklare behöver skriva mer kod (t.ex. för att definiera typer). Det är också lite mer inlärning om man jämför TS med JS. Man behöver också sätta upp sitt projekts byggfas med en kompilerare för TS, och hantera typning av externa bibliotek eller API-anrop. Det blir lite mer overhead som utvecklare helt enkelt. 

3. Initiera ett vanilla TS-projekt så att du kan kompilera 
 Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng