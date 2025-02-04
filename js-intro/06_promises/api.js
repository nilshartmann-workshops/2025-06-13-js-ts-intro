
export function loadGreetingFromServer(name) {
  // Diese Funktion steht exemplarisch für eine fertige, asynchrone Funktion,
  // die z.B. von einer Bibliothek zur Verfügung gestellt wird.
  //
  // Sie liefert ein Objekt mit einem Gruß für den übergebenen Namen zurück
  // ("greeting-as-a-service")
  //
  // Im echten Leben würde die Funktion zum Beispiel eine HTTP API aufrufen.
  return new Promise((resolve, reject) => {
    const timeout = name ? 500 : 250;

    setTimeout(() => {
      if (!name) {
        return reject("Must specify name");
      }
      return resolve({
        phrase: "Hello",
        name
      });
    }, timeout);
  });
}
