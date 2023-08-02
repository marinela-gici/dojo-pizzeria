function pizzaOven(crustType, sauceType, cheeses, toppings) {
  return {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings,
  };
}

var firstPizza = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var secondPizza = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
var thirdPizza = pizzaOven(
  "thin",
  "buffalo",
  ["cheddar"],
  ["olives", "onions"]
);
var fourthPizza = pizzaOven(
  "flat bread",
  "pesto",
  ["mozzarella", "feta"],
  ["mushrooms"]
);

console.log(firstPizza, secondPizza, thirdPizza, fourthPizza);
