import { describe, expect, test } from "vitest";
import shuffle from "./Shuffle";

describe("Shuffle", () => {
  test.todo("test shuffle entropy", () => {
    const originalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const list = [...originalList];
    shuffle(list);

    expect(list).not.toEqual(originalList);
    // TODO: Not equals test won't tell how good the randomness is
    //       How to test entropy of shuffle?
  });
});
