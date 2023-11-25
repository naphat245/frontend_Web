import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const BrandStore = defineStore("brands", {
  state: () => ({
    allBrand: [
      {
        id: useStorage("brand1id", 1),
        name: useStorage("brand1name", "Sony"),
        visibility: useStorage("visbrand1", true),
      },
      {
        id: useStorage("brand2id", 2),
        name: useStorage("brand2name", "Toshiba"),
        visibility: useStorage("visbrand2", true),
      },
      {
        id: useStorage("brand3id", 3),
        name: useStorage("brand3name", "Panasonic"),
        visibility: useStorage("visbrand3", true),
      },
      {
        id: useStorage("brand4id", 4),
        name: useStorage("brand4name", "Samsung"),
        visibility: useStorage("visbrand4", true),
      },
      {
        id: useStorage("brand5id", 5),
        name: useStorage("brand5name", "LG"),
        visibility: useStorage("visbrand5", true),
      },
      {
        id: useStorage("brand6id", 6),
        name: useStorage("brand6name", "Hitachi"),
        visibility: useStorage("visbrand6", true),
      },
      {
        id: useStorage("brand7id", 7),
        name: useStorage("brand7name", ""),
        visibility: useStorage("visbrand7", false),
      },
      {
        id: useStorage("brand8id", 8),
        name: useStorage("brand8name", ""),
        visibility: useStorage("visbrand8", false),
      },
      {
        id: useStorage("brand9id", 9),
        name: useStorage("brand9name", ""),
        visibility: useStorage("visbrand9", false),
      },
      {
        id: useStorage("brand10id", 10),
        name: useStorage("brand10name", ""),
        visibility: useStorage("visbrand10", false),
      },
      {
        id: useStorage("brand11id", 11),
        name: useStorage("brand11name", ""),
        visibility: useStorage("visbrand11", false),
      },
    ],
  }),
  getters: {},
  actions: {},
});
