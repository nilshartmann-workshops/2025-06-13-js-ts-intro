export default undefined;

// Implementiere die 'greet'-Funktion.
//  - Je nach übergebenem Parameter soll sie einen unterschiedlichen Gruß ausgeben
//    - Siehe dazu die Kommentare in der Funktion
//  - Um zu schauen, ob du die Funktion korrekt implementiert hast,
//    kannst du diese Datei ausführen, denn am Ende sind einige assert-Statements
//    implementiert
//  - Zum Ausführen:
//     - Wenn du IntelliJ oder Webstorm verwendet kann die Datei mit "Run..."
//     ausgeführt werden
//     - Wenn Du noch 23.x verwendest, sollte das auch mit VS Code funktionieren
//     - Ansonsten kopiere die Datei in den TypeScript Playground und drücke dort
//       auf "Run"
//       - ACHTUNG: Im Playground die erste Zeile ("export default undefined")
//         entfernen
//       - Die Konsolen-Ausgaben ("ALLES RICHTIG" oder Fehler) findest
//         du im Playground auf der rechten Seite ("Logs")
//       - Link zum Playground: https://www.typescriptlang.org/play

type Person = {
	firstname: string;
}

type NameSupplier = () => string

function greet(p: Person | string | NameSupplier | null): string {

	// Diese Funktion soll immer einen String zurückliefern.
	//  Wenn p nicht gesetzt ist, soll sei einen Leerstring zurückgeben
	//  Wenn p ein Leerstring ist, soll sie "Hello!" zurückgeben
	//  Wenn p ein String ist, soll sie `Hello, NAME` zurückgeben
	//  Wenn p eine NameSupplier-Funktion ist, soll sie diese Aufrufen
	//    und mit deren Rückgabewert den Gruß "Good afternoon, NAME" bilden
	//  Wenn p eine Person ist, soll sie `Welcome, NAME` zurückliefern
	//  Wobei NAME jeweils der String in Großbuchstaben sein soll (.toUpperCase())

	if (p === null) {
		return ""
	}

	if (p === "") {
		return "Hello!"
	}

	if (typeof p === "string") {
		return `Hello, ${p.toUpperCase()}`
	}

	if (typeof p === "function") {
		return `Good afternoon, ${p().toUpperCase()}`
	}

	return `Welcome, ${p.firstname.toUpperCase()}`;
}

assertEqual(greet("Klaus"), "Hello, KLAUS");
assertEqual(greet(""), "Hello!");
assertEqual(greet(null), "");
assertEqual(greet(() => "Susi"), "Good afternoon, SUSI");
assertEqual(greet({
	firstname: "Maja"
}), "Welcome, MAJA")

console.log("ALLES RICHTIG!")

function assertEqual(actual: any, expected: any) {
	if (actual !== expected) {
		throw new Error(`Actual value '${actual}' does not match expected value '${expected}'`)
	}
}