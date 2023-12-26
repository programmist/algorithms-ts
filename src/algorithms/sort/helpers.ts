/**
 * Swap the values of two indices of the given array, in place
 * @param list
 * @param i
 * @param j
 */
export function swap<T>(list: T[], i: number, j: number) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
