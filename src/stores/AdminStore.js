import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const adminStore = defineStore("admins", {
  state: () => ({
    alladmin: [
      {
        id: useStorage("admin1id", 1),
        username: useStorage("admin1name", "admin"),
        password: useStorage("admin1password", "admin"),
        isLogin: useStorage("admin1isLogin", false),
      },
    ],
  }),
  getters: {},
  actions: {},
});
