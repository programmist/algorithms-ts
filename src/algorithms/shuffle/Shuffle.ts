import { swap } from "../helpers";

export default function shuffle(list: number[]) {
  for (let i = 1; i < list.length; i++) {
    const randomIndex = getRandomInt(0, i - 1);
    swap(list, i, randomIndex);
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}
