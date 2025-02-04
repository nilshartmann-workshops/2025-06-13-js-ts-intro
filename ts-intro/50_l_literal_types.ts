// noinspection JSVoidFunctionReturnValueUsed

export default undefined;

// AUFGABE 1: Das Argument 'port' soll nur die beiden Strings
//  LPT1 oder COM1 entgegennehmen.
//  Schreibe einen Type-Alias dafür und verwende ihn hier als
//  Typ für "port"

type Port = "LPT1" | "COM1";

function createDevice(port: "LPT1" | "COM1") {
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

// Problem:
//  -> portName wird zu "string" "geweitet"
//  -> Mögliche Lösungen:
//    -> device als 'const' machen
//    -> Explizite Typ-Angabe (device: Port)
//    -> Prüfen, welchen Wert Device hat:
// 				function getPortName() {
// 					let device = hasLinePrinting() ? "LPT1" : "COM1";
// 					if (device == "LPT1" || device ==="COM1") {
// 						return device;
// 					}
// 					throw new Error("Invalid Device")
// 				}
//    -> Type Predicate oder Type Assertion Function schreiben
// 				function assertValidPortName(candidate: string): asserts candidate is Port {
// 					if (candidate === "LPT1" || candidate ==="COM1") {
// 						return;
// 					}
// 					throw new Error("Invalid Device")
// 				}
//   -> Die letzten beiden Varianten sind sehr umständlich auf den ersten Blick
//       welchen Vorteil haben sie aber?
//

function assertValidPortName(candidate: string): asserts candidate is Port {
	if (candidate === "LPT1" || candidate ==="COM1") {
		return;
	}
	throw new Error("Invalid Device")
}


// Diese Funktion liefert den Namen eines Ports zurück
//  (Die fikitve Funktion hasLinePrinting wird intern genutzt,
//  um festzustellen, welcher Port verwendet werden soll)
function getPortName() {
	let portName = hasLinePrinting() ? "LPT1" : "COM1";
	assertValidPortName(portName);
	return portName;
}

// AUFGABE 2:
//   - Der Aufruf von createDevice ist hier fehlerhaft,
//     sollte aber funktionieren...
//   - Welcher Typ ist 'deviceName'?
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
//    - Die Funktion soll - abhängig davon, welches Device übergeben
//      wurde - die 'print' bzw. 'transmit'-Funktion aufrufen, und
//      deren Rückgabewert zurückliefern
//    - Das Ergebnis von 'useDevice' soll also _immer_ ein String sein
//    - Wenn die Funktion zur Laufzeit mit einem ungültigen Device aufgerufen
//      wurde, soll die Funktion einen Fehler werfen
//    - Wenn der Union-Typ mit den Devices erweirtert wird, soll die Funktion
//      einen Compile-Fehler erzeugen
//      (erweitere dafür deinen Device Union-Typen um ein neues Device)
//
const value: string = useDevice(device);

type LinePrintingDevice = {
	port: "LPT1",
	print(): string;
}

type CommunicationDevice = {
	port: "COM1",
	transmit(): string;
}

type UnknownDevice = {
	port: "X"
}

function useDevice(device: LinePrintingDevice | CommunicationDevice | UnknownDevice): string {
	if (device.port === "LPT1") {
		return device.print();
	}

	if (device.port === "COM1") {
		return device.transmit();
	}

	// @ts-expect-error
	handleInvalidDevice(device);
}

function handleInvalidDevice(x: never): never {
	throw new Error("Invalid Device detected!")
}

// REFERENZ
//  Literal Types ("String als Typ"):
//  	https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
//  never-Typ:
//    https://www.typescriptlang.org/docs/handbook/2/functions.html#never
//    Zuweisbarkeit von never: https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
//  Assertion Function:
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions
//  "Tagged Union" Types (in TS auch als "Discriminated unions" bezeichnet):
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
//    https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking



