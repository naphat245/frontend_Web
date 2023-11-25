<template>
  <q-page class="q-pa-lg q-px-xl">

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminPage",

  setup() {
    return {

    };
  },

  methods: {
    gotoReserve() {
      this.$router.push({ name: "Reserve" });
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
  },
});
</script>

<style ></style>
