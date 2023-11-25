import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const DeviceStore = defineStore("devices", {
  state: () => ({
    allDevice: [
      {
        id: ("iddevice1", 1),
        name: useStorage("device1name", "Television"),
        visibility: useStorage("visdevice1", true),
      },
      {
        id: ("iddevice2", 2),
        name: useStorage("device2name", "Microwave"),
        visibility: useStorage("visdevice2", true),
      },
      {
        id: ("iddevice3", 3),
        name: useStorage("device3name", "Fan"),
        visibility: useStorage("visdevice3", true),
      },
      {
        id: ("iddevice4", 4),
        name: useStorage("device4name", "Aircondition"),
        visibility: useStorage("visdevice4", true),
      },
      {
        id: ("iddevice5", 5),
        name: useStorage("device5name", "Rice cooker"),
        visibility: useStorage("visdevice5", true),
      },
      {
        id: ("iddevice6", 6),
        name: useStorage("device6name", "Iron"),
        visibility: useStorage("visdevice6", true),
      },
      {
        id: ("iddevice7", 7),
        name: useStorage("device7name", "Refrigerator"),
        visibility: useStorage("visdevice7", true),
      },
      {
        id: ("iddevice8", 8),
        name: useStorage("device8name", "Vacuum cleaner"),
        visibility: useStorage("visdevice8", true),
      },
      {
        id: ("iddevice9", 9),
        name: useStorage("device9name", ""),
        visibility: useStorage("visdevice9", false),
      },
      {
        id: ("iddevice10", 10),
        name: useStorage("device10name", ""),
        visibility: useStorage("visdevice10", false),
      },
      {
        id: ("iddevice11", 11),
        name: useStorage("device11name", ""),
        visibility: useStorage("visdevice11", false),
      },
    ],
  }),
  getters: {},
  actions: {
    // clearStorage() {
    //   this.fullname = "";
    //   this.email = "";
    //   this.username = "";
    //   this.userType = "";
    //   this.password;
    //   this.accessToken = "";
    //   this.avatar = "";
    // },
  },
});
