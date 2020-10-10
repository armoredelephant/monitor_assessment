import { writable } from "svelte/store";
import type { Monitors } from "./types";

export const contact = writable({});

export const results = writable<Monitors>({
  monitor: [],
});
