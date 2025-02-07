// @ts-nocheck
export default undefined;

// Beschreibe die TypeScript-Typen "Person" und "PersonWithHobby"
//   (Die darin enthaltenen Eigenschaften sollen denen aus dem
//    'p'-Objekt der vorherigen Übung entsprechen)
//  - Entferne die erste Zeile in der Datei "// @ts-nocheck", damit
//    die TS-Fehler angezeigt werden
//  - PersonWithHobby soll die beiden Einträge 'hobby' und 'spendTimeWithHobby'
//    haben
//  - Abweichend von dem p-Objekt aus der ersten Übung, soll
//     die 'spendTimeWithHobby'-Funktion einen Parameter (Zahl) entgegennehmen
//   - Wenn du die Typen korrekt definiert hast, sollten unten keine
//     Fehler mehr auftreten
//     - Die Folgezeile, die mit "// @ts-expect-error" markiert ist, ist
//       bewusst fehlerhaft implementiert, um exemplarisch zu zeigen, welche
//       Verwendungen nicht erlaubt sind
//       (Das heisst, wenn dein TypeScript Typ korrekt ist, wird in der
//        darauffolgenden Zeile KEIN Fehler angezeigt, obwohl die Verwendung
//        falsch ist)

type Person = {
	todo: "Definiere diesen Typen. Diesen todo-Eintrag bitte löschen";
}

type PersonWithHobby = {
	todo: "Definiere diesen Typen";
	// dieser Typ soll alle Eigenschaften aus 'Person'
	// und zusätzlich die Eigenschaften 'hobby' und 'spendTimeWithHobby'
	// enthalten
}

function example() {
	const p: PersonWithHobby = {
		name: "Klaus",
		age: 32,
		yearOfBirth: 1990,
		hobby: "Fussball",

		spendTimeWithHobby: (timeSpent) => "Time spent with your hobby: " + (timeSpent * 60) + " minutes"
	};
}


function example1() {
	// Gültige Person
	const p: Person = {
		name: "Klaus",
		age: 32,
		yearOfBirth: 1990,
	};
}

function example2() {
	// Gültige PersonWithHobby
	const p: PersonWithHobby = {
		name: "Klaus",
		age: 32,
		yearOfBirth: 1990,
		hobby: "Fussball",

		spendTimeWithHobby: (timeSpent) => "Time spent with your hobby: " + (timeSpent * 60) + " minutes"
	};
}


function example3() {
	// @ts-expect-error Hier fehlen die Eigenschaften aus 'Person'
	const p: PersonWithHobby = {
		hobby: "Fussball",
		spendTimeWithHobby: (timeSpent) => "Time spent with your hobby: " + (timeSpent * 60) + " minutes"
	};
}

function example4() {
	// Hier sind zuviele Eigenschaften in Person
	const p: Person = {
		name: "Klaus",
		age: 32,
		yearOfBirth: 1990,
		// @ts-expect-error  Im 'Person'-Typ sollen 'hobby' und 'spendTimeWithHobby' nicht vorhanden sein
		hobby: "Fussball",
		// @ts-expect-error Im 'Person'-Typ sollen 'hobby' und 'spendTimeWithHobby' nicht vorhanden sein
		spendTimeWithHobby: (timeSpent) => "Time spent with your hobby: " + (timeSpent * 60) + " minutes"
	};
}

function example5() {
	// Person mit ungültigen Werten
	const p: Person = {
		name: "Klaus",
		// @ts-expect-error
		age: "32",
		// @ts-expect-error
		yearOfBirth: null,
	};
}


function example6() {
	// Person mit ungültigen Werten
	const p: Person = {
		// @ts-expect-error
		name: undefined,
		// @ts-expect-error
		age: undefined,
		// @ts-expect-error
		yearOfBirth: undefined
	};
}


function example7() {
	// PersonWithHobby mit ungültigen Werten
	const p: PersonWithHobby = {
		name: "Susi",
		age: 32,
		yearOfBirth: 1990,
		// @ts-expect-error
		hobby: null,
		// @ts-expect-error
		spendTimeWithHobby: null
	};
}

// REFERENZ:
//  Objekt-Typen: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
//  Intersection-Type: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
//   (In dem Beispiel wird mit 'interface' gearbeitet, (fast) dasselbe gilt
//   aber auch für 'type's)



