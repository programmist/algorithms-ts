import { binarySearch } from "./BinarySearch";
import { expect, test } from "vitest";

// test stub
test.todo("test...", () => {});

function getRandomInt(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomArray(qty: number) {
  const nums = new Array(qty);
  for (let i = 0; i < qty; i++) {
    nums[i] = getRandomInt(0, qty);
  }
  return nums;
}

function generateStats(successes: number[], fails: number[]) {
  const sum = (sum: number, val: number) => sum + val;

  const successSum = successes.reduce(sum, 0);
  if (successes.length > 0) {
    console.log(`Avg success time: ${successSum / successes.length}`);
  } else {
    console.log("No successes");
  }

  const failSum = fails.reduce(sum, 0);
  if (fails.length > 0) {
    console.log(`Avg fail time: ${failSum / fails.length}`);
  } else {
    console.log("No fails");
  }

  console.log(
    `Avg total search time ${
      (successSum + failSum) / (successes.length + fails.length)
    }`
  );
}

function main() {
  const nums = getRandomArray(10000);
  nums.sort((a, b) => a - b);
  console.log(nums);

  const successes = [];
  const fails = [];

  for (let i = 0; i < 1000; i++) {
    const key = getRandomInt(0, 10000);
    // console.log(`search for ${key}`);
    const startTime = performance.now();
    const result = binarySearch(nums, key);
    const elapsedTime = performance.now() - startTime;

    if (result === -1) {
      fails.push(elapsedTime);
      // console.log(`${key} not found`);
    } else {
      successes.push(elapsedTime);
      // console.log(`${key} found at ${result}`);
    }
  }

  generateStats(successes, fails);
}

main();
