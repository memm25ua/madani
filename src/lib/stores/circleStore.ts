// hoverStore.ts
import { writable } from "svelte/store";

export const circleState = writable({
  x: 0,
  y: 0,
  r: 0,
  hover: false,
  show: true,
});

export function setHover(hover: boolean, delay: number = 0) {
  setTimeout(() => {
    circleState.update((state) => ({ ...state, hover }));
  }, delay);
}
