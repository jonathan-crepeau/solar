// console.log('Fear is mind killer.')

const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  {
    name: "Jupiter",
    ringSystem: true,
    moons: ["Europa", "Ganymede", "Io", "Callisto"],
  },
  {
    name: "Saturn",
    ringSystem: true,
    moons: ["Titan", "Enceladus", "Rhea", "Mimas"],
  },
  {
    name: "Uranus",
    ringSystem: true,
    moons: ["Miranda", "Titania", "Ariel", "Umbriel"],
  },
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).

// console.log(solarSystem[4].moons);

// 2. Print the name of Neptune's moon "Nereid" to the console.

// console.log(solarSystem[7].moons[1]);

// 3. Add a new moon called "Endor" to Venus' moons array.

// solarSystem[1].moons.push('Endor');

// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").

// solarSystem.push({
//   name: 'Pluto',
//   ringSystem: false,
//   moons: ['Charon'],
// });

// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.

// solarSystem[2].diameter = "7917.5 mi";

// 6. Change Mercury's ringSystem boolean to true.

// solarSystem[0].ringSystem = true;

// 7. Change Uranus' moon "Umbriel" to "Oberon"

// solarSystem[6].moons[3] = "Oberon";

// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.

function withRingSystem(obj) {
  for (let a = 0; a < Object.keys(obj).length; a++) {
    if (obj[a].ringSystem == true) {
      console.log(obj[a]);
    }
  }
}