function pizzaOven(crustType, sauceType, cheeses, toppings) {
  return {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
  };
}

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var thirdPizza = pizzaOven("thin", "buffalo", ["cheddar"], ["olives", "onions"]);
var fourthPizza = pizzaOven("flat bread", "pesto", ["mozzarella", "feta"], ["mushrooms"]);


function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "flat bread", "thin"],
      sauceTypes = ["traditional", "marinara", "buffalo", "pesto"],
      cheesesTypes = ["mozzarella", "feta", "cheddar"],
      toppingsTypes = ["mushrooms", "olives", "onions", "pepperoni", "sausage"];
  
  var randomCrustTypes = crustTypes[Math.floor(Math.random() * crustTypes.length)],
      randomsauceTypes = sauceTypes[Math.floor(Math.random() * sauceTypes.length)],
      randomcheeses = cheesesTypes[Math.floor(Math.random() * cheesesTypes.length)],
      randomtoppings = toppingsTypes[Math.floor(Math.random() * toppingsTypes.length)];
  
  return {
    crustType: randomCrustTypes,
    sauceType: randomsauceTypes,
    cheeses: randomcheeses,
    toppings: randomtoppings 
  };
  
}
var randomPizza1 = randomPizza();

console.log(firstPizza, secondPizza, thirdPizza, fourthPizza);
console.log(randomPizza1);