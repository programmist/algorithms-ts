import { binarySearch } from "./BinarySearch";

const ints = [6, 33, 43, 51, 53, 13, 14, 93, 95, 96, 97, 25, 64, 72, 84];
ints.sort((a, b) => a - b);

console.log(ints);
console.log("binarySearch(ints, 33) = ", binarySearch(ints, 33));
console.log("binarySearch(ints, 95) = ", binarySearch(ints, 95));
console.log("binarySearch(ints, 49) = ", binarySearch(ints, 49));
