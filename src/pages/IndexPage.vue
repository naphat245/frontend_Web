<template>
  <q-page style="margin-top: 2px;">
    <q-card>
      <q-img src="/image01.png" :ratio="18.8 / 9" style="max-height: 800; max-width: auto">
        <div class="full-width full-height row items-center">
          <div class="offset-md-1">
            <div>
              <img src="/icon/SeatBarLogo_md.png" class="q-mb-md" />
              <div class="text-h3 q-mx-md q-my-md">Welcome to our website</div>
              <div class="text-h5 text-weight-light q-mx-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Incidunt voluptate maiores similique exercitationem deleniti
                veniam magnam sunt, <br />odio quos, alias, qui quaerat ipsum
                odit doloribus laborum dicta dolor explicabo! Dolorum?
              </div>
            </div>
            <q-btn unelevated rounded class="q-my-lg q-mx-md" color="deep-orange"
              style="width: 400px; height: 80px; font-size: 30px;" @click="gotoLogin">Reserve Now
            </q-btn>
          </div>
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
