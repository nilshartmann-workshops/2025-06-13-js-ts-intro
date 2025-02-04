// @ts-nocheck
// noinspection JSVoidFunctionReturnValueUsed

// Folgende Zeile ignorieren; Workaround für diesen Workspace
export default undefined;

// TODO:
//
// Auf den ersten Blick leider fast nicht zu sehen: in dieser Datei haben
//   sich einige typische Programmierfehler eingeschlichen, die "dank"
//   des dynamischen Typsystems von JavaScript erst zur Laufzeit auffallen 🙀
//
//   Aber mit dem Einsatz von TypeScript kannst du die sicherlich schnell
//     finden und beheben 💪
//
//    - Entferne oben den Kommentar "// @ts-nocheck"
//      - TypeScript zeigt dir jetzt eine Reihe von Fehlern an
//    - Du musst zunächst fehlende Typangaben von 'newPerson' ergänzen.
//      - Versuche dazu aus dem Code, der 'newPerson' verwendet,
//        Rückschlüsse zu ziehen, wie die Typen für die drei Parameter
//        'name', 'age' und 'hobby' sein müssen
//      - Musst du weitere Typangaben in der Datei hinschreiben?
//    - Auch innerhalb und bei der Verwendung der newPerson-Funktion haben
//        sich leider Fehler eingeschlichen 😪
//        - Kannst du die Fehler beheben? Dazu musst du den Code bei
//          der Verwendung der Funktion etwas anpassen.
//        - Es gibt dabei keine Anforderungen, nur, dass der Code hinterher
//          funktionieren sollte
//          (Löschen des Codes gilt also nicht, auch wenn dadurch die Fehler
//           verschwinden würden 😉)
//
// Du kannst den Code auch kopieren und im Online TypeScript "Playground"
// bearbeiten, wenn es hier mit der TS-Unterstützung deiner IDE nicht klappt
//
//   https://www.typescriptlang.org/play

function newPerson(name, age, hobby) {
	// Das Object 'p' darf in der Übung nicht verändert werden!
	const p = {
		name,
		age,
		yearOfBirth: 2025 - age,
		hobby,

		spendTimeWithHobby: hobby ? (() => "...doing something...") : undefined
	};
}

function getAdultAge() {
	return "18";
}

const hans = newPerson("Hans", 34);
console.log(hans.age);

const susi = newPerson("Susi");

const klaus = newPerson("Klaus", 17);
klaus.age = getAdultAge();
klaus.hobby.toLowerCase();
klaus.spendTimeWithHobby();

// REFERENZ:
// Datentypen in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
// null und undefined: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
// "implicit any" als "Fallback", wenn TS kein Typ ableitet:
//   - https://www.typescriptlang.org/docs/handbook/2/basic-types.html#noimplicitany
//   - https://www.typescriptlang.org/tsconfig/#noImplicitAny
