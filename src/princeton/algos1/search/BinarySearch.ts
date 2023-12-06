export function binarySearch(ints: number[], key: number) {
  let low = 0;
  let high = ints.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (key < ints[mid]) high = mid - 1;
    else if (key > ints[mid]) low = mid + 1;
    else return mid;
  }
  return -1;
}
