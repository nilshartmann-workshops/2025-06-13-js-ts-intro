function makeCache(maxSize) {
  const items = {};

  function addItem(key, value) {
    if (Object.keys(items).length >= maxSize) {
      throw new Error("Too many items");
    }
    items[key] = value;
  }

  function removeItem(key) {
    delete items[key];
  }

  function getItem(key, supplier) {
    if (key in items) {
      return items[key];
    }

    if (typeof supplier === "function") {
      return supplier();
    }
      return supplier;
  }

  return { addItem, removeItem, getItem };
}

const c = makeCache(2);
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
