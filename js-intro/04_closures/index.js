// Implementiere einen einfachen Cache (Key-Value-Paare) als Closure
//
// Der Cache soll aus drei Methoden bestehen:
//  - addItem(key, value)  fügt einen Eintrag dem Cache hinzu
//  - getItem(key, supplier) liest einen Eintrag aus dem Cache
//  - removeItem(key): löscht einen Eintrag aus dem Cache
//
// Hinweis zu addItem:
//  - der Cache soll eine maxSize beim Erzeugen bekommen. Wenn addItem
//    aufgerufen wird, aber es sind bereits maxSize Items im Cache,
//    soll ein Fehler geworfen werden (throw new Error("..."))

// Hinweis zu getItem:
//  - getItem hat zwei Parameter: key und supplier
//     - key ist der Key des Eintrags, der abgefragt wird
//     - supplier ist optional und soll verwendet werden, wenn es für den Key
//         keinen Eintrag im Cache gibt. Damit kann der Aufrufer Default-Werte erzeugen,
//           wenn ein Key nicht vorhanden ist
//         - Wenn "supplier" eine _Funktion_ ist, soll sie aufgerufen werden
//           und deren Rückgabewert zurückgeliefert werden
//         - Ansonsten soll der Wert von "supplier" zurückgegeben werden.
//     - Ist der abgefragte Key nicht vorhanden und supplier ist nicht
//         angegeben, soll undefined zurückgeliefert werden

// Danach sollen folgende Aufrufe funktionieren:

const c = makeCache(2); // maxSize = 2
c.addItem("klaus", "Klaus Müller");
c.addItem("susi", "Susi Schmidt");

console.log("Klaus", c.getItem("klaus")); // Erwartet: "Klaus Müller"
console.log(c.getItem("peter", () => "Peter !!")); // Erwartet: "Peter !!"
console.log(c.getItem("peter", "Peter Schmidt")); // Erwartet: "Peter Schmidt"


const c2 = makeCache(3);
console.log(c2.getItem("klaus")); // Erwartet: undefined

c.removeItem("klaus");
console.log(c.getItem("klaus")); // Erwartet: undefined

c.addItem("peter", "Peter Pan");
c.addItem("fritz", "Fischers Fritz"); // Erwartet: error

// REFERENZ
// Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// in-Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
// delete-Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// throw-Statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
//
// Es gibt im JavaScript auch mittlerweile Maps und Sets, die du verwenden kannst.
// In React/Next.js-Anwendungen wird damit (noch) eher wenig gearbeitet, deswegen schlage ich dir vor,
// die Cache-Implementierung ohne Map/Set zu machen.
//   Aber wenn du Map/Set ausprobieren willst, kannst du das natürlich auch machen (dann als
//   "Implementierungsdetail" von makeCache)
// Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
