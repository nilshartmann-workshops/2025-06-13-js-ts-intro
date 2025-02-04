import * as assert from "node:assert";

export default undefined;

/**
 * Das ist das Format, das der Server zurückliefert:
 *   - entweder ein string (Fehlerfall)
 *   - oder ein Objekt mit deinem 'data'-Property
 */
type ServerResponse = string | { data: string }

// Diese Funktion soll eine low-level Browser-Funktion
//  simulieren, die Daten von einer HTTP API lesen kann
//  Im Browser wäre das zum Beispiel die 'fetch'-Funktion
declare function fetchData(): any;

// Das hier soll nicht funktionieren, weil wir ja
// nicht wissen, ob der Server wirklich unsere
// Server Response geliefert hat
// (vielleicht hat der Server einen Bug und liefert z.B.
// null zurück).
// Deswegen wollen wir den Verwender dazu zwingen,
// den Return Type vor der Verwendung zu überprüfen
//  -> AUGABE: Setze den Rückgabe-Typ von fetchData()
//     auf 'unknown'. Nun gibt es hier keinen Fehler mehr
//     (Warum nicht gleich als Rückgabe-Typ 'ServerResponse'
//     verwenden? Weil die Idee von 'fetchData' ist, dass
//     wir deren Funktionsweise und Signatur nicht selbst in
//     der Hand haben, weil die Funktion aus einer externen Bibliothek
//     o.ä. kommt und 'ServerResponse' unser fachlicher Typ ist,
//     den die Bibliothek natürlich nicht kennt.
//     Aber vielleicht hat der Anbieter der Funktion zumindest
//     auf unseren Verbesserungsvorschlag gehört und
//     aus 'any' 'unknown' gemacht :-)
// @ts-expect-error
const result: ServerResponse = fetchData();

function loadDataFromApi(path: string): ServerResponse {
	const result = fetchData();

	// AUFGABE: Stelle sicher, das result eine gültige
	// ServerResponse ist
	//  Schreibe dazu eine Type Assertion Funktion,
	//  die prüft, ob 'result' unserer gewünschten
	//  Antwort entspricht

	return result;
}

function loadUser() {
	const response = loadDataFromApi("/api/user");

	// todo: Schreibe eine Type Predicate Funktion, die entweder überprüft,
	//  ob die Server Response ein Fehler ist (String) oder erfolgreich war
	//  (Object) und rufe damit dann wahlweise
	//  handleErrorResponse bzw. handleUserResponse auf

}

declare function handleErrorResponse(err: string): void;
declare function handleUserResponse(user: { data: string }): void;

// REFERENZ:
//  Der 'unknown'-Typ:
//    https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
//  Type Narrowing mit dem JavaScript 'in'-Operator:
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
//  Type Predicates:
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
//  Assertion Function:
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions
