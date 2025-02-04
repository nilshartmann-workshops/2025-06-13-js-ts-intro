export default undefined;

function readPerson() {
	return {
		id:         "p-1",
		firstname:  "Susi",
		age:        34,
		registered: true
	}
}

// AUFGABE:
//   Die Funktion 'newPerson' soll einen korrekten Typen für
//   // den Parameter 'p' bekommen ('any' bitte entfernen)
//    - Der Parameter soll dem Typen entsprechen, der von
//      readPerson zurückkommt, allerdings OHNE das 'id'-Property
//      (Stell dir vor es gibt ein fachliches Objekt Person,
//      das kommet aus einer DB (mit Id), beim erzeugen einer
//      neuen Person gibt es die Id aber noch nicht)
//    - Kannst du den Typen so bauen, dass du ihn aus dem Rückgabe-
//      Typ von readPerson ableiten lässt?
declare function newPerson(p: any): void;

// Das soll funktionieren
newPerson({
	firstname:  "Klaus",
	age:        32,
	registered: false
});

// Das soll nicht funktionieren (id angegeben):

newPerson({
// @ts-expect-error
	id:         "p-2",
	firstname:  "Klaus",
	age:        32,
	registered: false
});

// AUFGABE 2: patchPersons soll eine Liste von Personen entgegen nehmen
//  (any bitte enfernen)
//  - Die Liste soll nicht veränderbar sein!
//  - Die übergebenen Personen sollen eine beliebige Untermenge des
//     Person-Typs sein
//     (man kann also alle Properties weglassen oder angeben, je nachdem
//     welche Properties man in dem Objekt "patchen" möchte)
//  - Die Person-Objekte sollen nicht veränderbar sein
//     (patchPersons speichert die Objekte vielleicht auf dem Server
//     oder einer DB, soll die Objekte selber aber nicht anpassen)
//
function patchPersons(persons: any) {

	// @ts-expect-error persons sollte eine schreibgeschützte Liste sein,
	//   darauf darf 'push' nicht aufgerufen werden
	persons.push({
		id:         "p-1",
		firstname:  "Susi",
		age:        34,
		registered: true})

	// Das sollte gehen: persons muss eine Liste sein
	persons.forEach(p => {
		// @ts-expect-error: P sollte read-only sein, deswegen
		//  kann age nicht zugewiesen werden
		p.age = 77;
		// @ts-expect-error: firstname sollte optional sein
		//  und deswegen möglicherweise undefined
		p.firstname.toUpperCase();

		// Das sollte gehen, denn wenn firstname am Objekt vorhanden ist,
		//  muss es ein String sein, so dass toUpperCase() augerufen werden kann
		p.firstname?.toUpperCase();

		// AUFGABE / FRAGE:
		//  - Wir haben hier jetzt ein Objekt in der Hand. Angenommen es würde auf
		//  dem Server einen Endpunkt geben, der ein solches Objekt (Unterobjekt von Person)
		//  annehmen und speichern kann (PATCH /api/persons/personId).
		//  Wäre es eine gute Idee, das Objekt, so wie wir es hier zur Laufzeit
		//  haben, ungeprüft an das Backend zu senden?

	})
}

// REFERENZ:
//  Array und ReadonlyArray:
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
//  Eingebaute Utility-Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
