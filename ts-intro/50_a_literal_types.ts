// @ts-nocheck
// noinspection JSVoidFunctionReturnValueUsed

export default undefined;

// VORBEREITUNG: Entferne '// @ts-nocheck' oben, damit die TS-Fehler
//  angezeigt werden
//
// AUFGABE 1: Das Argument 'port' soll nur die beiden Strings
//  LPT1 oder COM1 entgegennehmen.
//  Schreibe einen Type-Alias dafür und verwende ihn hier als
//  Typ für "port" (statt 'string')


function createDevice(port: string) {
	switch (port) {
		case "LPT1":
			return {
				port,

				print() {
					return "I'm printing";
				}
			}
		case "COM1":
			return {
				port,

				transmit() {
					return "I'm transmitting"
				}
			}
	}
}

// Hier soll es keine Fehler geben
createDevice("LPT1");
createDevice("COM1");
// @ts-expect-error
createDevice("COM2");
// @ts-expect-error
createDevice("lpt1");
// @ts-expect-error
createDevice();
// @ts-expect-error
createDevice(null);
// @ts-expect-error
createDevice("");

/**
 * Eine fiktive Hilfsfunktion
 *
 * Die Funktion ist fertig, zum Beispiel aus einer Bibliothek,
 * und kann nicht verändert werden.
 */
declare function hasLinePrinting(): boolean;

// Diese Funktion liefert den Namen eines Ports zurück
//  (Die fiktive Funktion hasLinePrinting wird intern genutzt,
//  um festzustellen, welcher Port verwendet werden soll)
function getPortName() {
	let portName = hasLinePrinting() ? "LPT1" : "COM1";
	return portName;
}

// AUFGABE 2:
//   - Der Aufruf von createDevice ist hier fehlerhaft,
//     sollte aber funktionieren...
//   - Welcher Typ ist 'portName'?
//   - Was musst du verändern, damit du den Rückgabe-Wert
//     an createDevice übergeben kannst?
//     - Hinweis: Du kannst hier und/oder in der getPortName
//       Anpassungen machen.
//
const portName = getPortName();
const device = createDevice(portName);

// AUFGABE 3: Verwendung des Devices
//  Implementiere die useDevice-Funktion. Diese soll mit
//    Devices arbeiten können, die mit createDevice erzeugt
//    werden
//    - Du musst also einen (Union-)Typen für Device erzeugen
//      - Den Union-Typ musst du für den 'device'-Parameter verwneden
//    - Die Funktion soll - abhängig davon, welches Device übergeben
//      wurde - die 'print' bzw. 'transmit'-Funktion aufrufen, und
//      deren Rückgabewert zurückliefern

const value: string = useDevice(device);

function useDevice(device: any): string {
	return "todo";
}

// REFERENZ
//  Literal Types ("String als Typ"):
//  	https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
//  never-Typ:
//    https://www.typescriptlang.org/docs/handbook/2/functions.html#never
//    Zuweisbarkeit von never: https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
//  "Tagged Union" Types (in TS auch als "Discriminated unions" bezeichnet):
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking


