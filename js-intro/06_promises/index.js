// Übung: Promises

// loadGreetingFromServer liefert ein Objekt mit einen Gruß für den Namen zurück,
// oder einen Fehler wenn kein name angegeben wurde.
//  Diese Funktion ist "fertig", die musst Du nur verwenden.
//
// Im Erfolgsfall liefert die Funktion ein Promise zurückgegeben, das zum folgenden
// Objekt aufgelöst wird { phrase: ..., name: ... }

// 1. Vervollständige getGreetingAsString (s.u.)
// 2. Vervollständige die Aufrufe von getGreetingAsString (s.u.)

function getGreetingAsString(name) {
  // Implementiere diese Funktion
  // Die Funktion soll loadGreetingFromServer (aus "api.js") mit 'name' aufrufen und
  //   - im Erfolgsfall einen String zurückliefern, in dem die Daten des von
  //     loadGreetingFromServer zurückgelieferte Greeting-Objekts enthalten sind
  //     Das Greeting-Objekt besteht auf 'name' und 'phrase'
  //   - im Fehlerfall einen String zurückliefern mit einer Fehlermeldung
  //
  // Du kannst Promise-Ketten oder async/await API verwenden
}

// Führe getGreetingAsString aus und gib das Ergebnis auf der Konsole aus
//   - Im ersten Fall ("Susi") sollte eine Meldung mit dem Gruß erscheinen
//   - Im zweiten Fall ("null") sollte eine Fehlermeldung erscheinen
//
// Zusatz-Aufgabe:
//  - kannst Du sicherstellen, dass die Ausgabe für Susi *immer* vor der Ausgabe
//    von "null" auf der Konsole erscheint?

getGreetingAsString("Susi");
getGreetingAsString(null);

