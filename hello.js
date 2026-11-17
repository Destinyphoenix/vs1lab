console.log("Hello, World!");
const obj2 = {
  lastname: "test",
  attribut: "Wert",
};
console.log(obj2.lastname);
console.log(obj2["attribut"]);

obj2.role = function () {
  return "Dozent";
};

console.log(obj2.role());

let values = [1, 2, 3, 4];
console.log(values[0]);
values.push(42, 66, 67);
console.log(values);

values.splice(1, 2); // Entfernt die Elemente an den Indizes 1 und 2
console.log(values);

const strings = ["Hallo", "Welt", "Test"];
const result = strings.join("-");
console.log(result);

const school = new String("HKA");
const faculty = "IWI";
console.log(typeof school); //zu beiden gehört das selbe wrapper objekt

const price = 22.66;
console.log(price.toFixed(1)); // Ausgabe: "22.7" gerundet auf eine Nachkommastelle

try {
  throw new Error("Eingabefehler");
  price = price + school;
  console.log(price);
} catch (error) {
  console.log("Fehler: " + error.message);
} finally {
  console.log("Wie in Java immer aufgerufen");
}
