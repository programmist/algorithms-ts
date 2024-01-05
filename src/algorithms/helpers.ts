// TODO: Organize functions into namespaces/categories

import { Sortable } from "./sort/Sort";

/**
 * Swap the values of two indices of the given array, in place
 *
 * @param list The list upon which to operate
 * @param i The index of the first value to swap
 * @param j The index of the second value to swap
 */
export function swap<T>(list: T[], i: number, j: number) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

/**
 * Find the integer midpoint between the two indices
 *
 * @param low
 * @param high
 * @returns
 */
export function midpoint(low: number, high: number) {
  return low + Math.floor((high - low) / 2);
}

/**
 * Copy a segment of one array to another
 *
 * @param src source array
 * @param target destination array
 * @param start start index
 * @param end end index
 */
function copy(src: Sortable[], target: Sortable[], start: number, end: number) {
  for (let i = start; i <= end; i++) {
    target[i] = src[i];
  }
}

/**
 * Return a random integer between the specified `min` and `max` range.
 *
 * @param min start of range (inclusive)
 * @param max end of range (exclusive)
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}
