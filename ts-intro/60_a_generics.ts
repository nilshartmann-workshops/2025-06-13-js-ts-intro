export default undefined;

// AUFGABE 1: Beschreibe die Typen für einen generischen Cache

// SCHRITT 1: Beschreibe ein Objekt "Cache",
//  das einen generischen Typ-Parameter entgegennimmt, der
//  bestimmt, von welchem Typ die Objekte im Cache sind
//
//  Das Cache-Objekt soll zwei Methoden haben:
//    getItem und putItem
//    - getItem:
//      - Einen Parameter "key" vom Typ "string"
//      - Rückgabewert: Typ der Objekte, die in diesem Cache abgelegt sind
//    - putItem:
//      - Parameter 1: "key" vom Typ string
//      - Parameter 2: value vom Typ des Caches
//      - Rückgabewert: void
//
// SCHRITT 2:
//  - Ergänze die Funktion 'makeCache' um den Typ-Parameter
//    und den Rückgabewert (sie soll einen Cache zurückliefern)

type Cache = { /* todo */ }
declare function makeCache(): any

// BEISPIELHAFTE VERWENDUNG
//  Die folgenden Aufrufe sollen funktionieren, wenn
//   der Typ Cache und die Funktion makeCache die korrekten
//   Typen haben
const stringCache = makeCache<string>();
const s: string | null = stringCache.getItem("firstname");
stringCache.putItem("susi", "Susi");
// Kannst du ein Objekt in den Cache legen, das einen falschen Typen hat?
stringCache.putItem("klaus", null as any as string)

//  AUFGABE 2: Eine "bessere" makeCache-Funktion
// Wir wollen vermeiden, dass man Objekte falschen Typs in den Cache legen darf
//  -> wir haben ja schon Situationen besprochen, wie und warum das theoretisch
//     zur LAUFZEIT möglich ist, aber zur ENTWICKLUNGSzeit nicht auffällt
//  -> aus diesem Grund soll es eine zweite Factory-Funktion für den Cache geben:
//     makeBetterCache
//  -> diese soll einen Parameter haben (valideFunction).
//       Die validateFunction wird intern von der makeBetterCache-Implementierung
//       verwendet, um beim Hinzufügen eines Objektes zu prüfen, ob dieses gültig ist.
//       (Wir kümmern uns nicht um die Implementierung von makeBetterCache, nur um die
//       Signatur der Funktion)
//       Aus diesem Grund soll die vlidateFunction einen Parameter haben, der vom
//       Typ der Objekte des Caches ist und true/false zurückliefern, je nachdem
//       ob der übergebene Eintrag gültig ist.
//       Der Typ ders Parameters von 'validateFunction' (mit dem zu überprüfenden
//       Objekt muss in TypeScript also derselbe Typ sein, mit dem auch der Cache
//       erzeugt wird.
//       (Im Cache sollen 'string's als Werte stehen, also muss die 'validateFunction'
//       Werte von strings überprüfen)
//  Kannst du eine Signatur für makeBetterCache schreiben, so dass der Rückgabe-Typ
//           aus dem Funktionsargument von validateFunction abgeleitet wird?
//   BEISPIEL:
//     declare function valideString(s: string): boolean;
//     makeBetterCache(validateString) -> Liefert Cache<string> zurück!
//
declare function makeBetterCache(validateFunction: any): any;

type Person = {
	firstname: string;
}

declare function validatePerson(p: Person): boolean;

const betterPersonCache = makeBetterCache(validatePerson);
const i: Person | null = betterPersonCache.getItem("person");
betterPersonCache.putItem("klaus", {firstname: "Klaus"});
// @ts-expect-error
betterPersonCache.putItem("susi", {lastname: "Müller"});

//  AUFGABE 3 (OPTIONAL): Eine noch bessere makeBetterCache-Implementierung
//    mit neuer Version der validateFunction
//    Die validateFunction soll nicht den Typ des Caches (string, Person, etc.) entgegen nehmen,
//       sondern 'unknown' (schliesslich soll sie ja eigentlich einen beliebigen
//       Wert überprüfen, der möglicherweise gar nicht dem Wert im Cache entspricht)
//    Allerdings soll die validateFunction nun eine Type Predicate Function sein.
//    Kannst du die Signatur von makeBetterCache entsprechen ändern, so dass der Typ des
//    Cache-Inhaltes aus dem Rückgabewert von validateFunction bestimmt wird? 🤯
declare function makeEvenBetterCache(validateFunction: any): any;

declare function isPerson(p: unknown): p is Person;

const evenBetterPersonCache = makeEvenBetterCache(isPerson);
const person: Person | null = evenBetterPersonCache.getItem("person");
// @ts-expect-error: Inhalt vom Cache is Person (nicht string)
const falsch: string | null = evenBetterPersonCache.getItem("person");
evenBetterPersonCache.putItem("klaus", {firstname: "Klaus"});
// @ts-expect-error: Falsches Objekt
evenBetterPersonCache.putItem("susi", {lastname: "Müller"});

// REFERENZ
// Generics:
//   - https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics
//   - https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics
