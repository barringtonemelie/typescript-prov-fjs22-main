###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 


Skillnader mellan types och interfaces: 

Types kan: 
- Använda unions, tuples, primitiver, i princip vad som helst 
- Kan kombineras till en intersection type (med &) 

EXEMPEL:
Union type: 
    type User = "Admin" | "User" | "Guest"; 

Intersection type: 
    type PersonNameType = { name: string; }
    type Person1 = PersonNameType & { age: number; }

Types kan inte: 
- Deklareras igen eller extenda (med keyword extend) en annan typ 
- Extenda en klass 

Interfaces kan: 
- Bli omdeklarerade (declaration merging), och ärva från andra interfaces (med "extend")
- Extenda klasser 
- Kombineras till intersection type med & (OBS blir inte en intersection av interfaces utan en intersection type)
- Interfaces är snabbare än types (under type checking) men på sistone säger vissa att detta inte är relevant längre (dvs ingen märkbar skillnad)

EXEMPEL:

Declaration merging: 
    interface Person: {
        name: string; 
    }

    interface Person {
        age: number
    }

    const john: Person = {
        name: "John",
        age: 26,
    }
    
En intersection type bildad av två interfaces: 
    interface PersonNameInterface { name: string; }
    interface PersonAgeInterface { age: number; }
    type Person3 = PersonNameInterface & PersonAgeInterface

Interfaces kan inte: 
- Använda unions, tuples, primitiver (interfaces har formen av objekt och i ett objekt kan de förekomma)

EXEMPEL: 

Fungerar inte: 

    interface User = "Admin" | "User"; 

Fungerar: 

    interface User = {
        permissions: "Admin" | "User"; 
    }


Min personliga approach skulle vara att använda typer tills jag behöver något specifikt som ett interface löser bäst. Detta för att undvika oväntade beteenden som kan uppstå pga declaration merging med interfaces. Typer lägger en mer stabil grund och vid behov kan man utöka med interfaces. Men kommer såklart anpassa mig efter hur man arbetar på min arbetsplats. 