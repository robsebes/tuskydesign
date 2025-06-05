import { getRandomAnimal } from "@nxtest/animals";
import { getRandomName } from "@nxtest/names";

const name = getRandomName();
const animal = getRandomAnimal();

console.log(`${name} the ${animal.name} says ${animal.sound}!`);
