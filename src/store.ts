import { writable } from "svelte/store";
import type { Monitors } from "./types";

export const contact = writable({
  name: "",
  ref: "",
  email: "",
  count: 1,
});

export const results = writable<Monitors>({
  monitor: [],
});
