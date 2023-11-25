import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useLoginUserStore = defineStore("loginuser", {
  state: () => ({
    userid: useStorage("userid", ""),
    fullname: useStorage("fullname", ""),
    username: useStorage("username", ""),
    accessToken: useStorage("accessToken", ""),
    userType: useStorage("userType", ""),
  }),
  getters: {
    getUserId: (state) => {
      return state.userid;
    },
    getFullname: (state) => {
      return state.fullname;
    },
    getUsername: (state) => {
      return state.username;
    },
    getAcessToken: (state) => {
      return state.accessToken;
    },
    getUserType: (state) => {
        return state.userType;
      },
  },
  actions: {
    clearStorage() {
      this.userid = "";
      this.fullname = "";
      this.username = "";
      this.accessToken = "";
      this.userType = ""
    },
  },
});
