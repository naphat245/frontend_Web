<template>
  <q-layout vview="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header class="q-py-md shadow-10">
      <q-toolbar>
        <q-btn @click="drawer = !drawer" dense round icon="person" aria-label="Menu" />
        <div class="q-mx-auto q-py-sm">
          <img href="/" src="/icon/SeatBarLogo_small.png" @click="gotoHome" />
        </div>
      </q-toolbar>
      <q-tabs v-model="tab" class="center">
        <q-btn flat rounded color="white" label="Promotion" style="font-size: 20px;" @click="gotoNews" />
        <q-btn flat rounded color="white" label="Stage Show" style="font-size: 20px;" @click="gotoShows" />
        <q-btn outline rounded color="white" label="Reserve Now" style="font-size: 20px;" class="q-mx-lg"
          @click="gotoReserve" />
        <q-btn flat rounded color="white" label="Drinks & Food" style="font-size: 20px;" @click="gotoFB" />
        <q-btn flat rounded color="white" label="Contacts" style="font-size: 20px;" @click="gotoContact" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="drawer" overlay :width="200" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">

          <div v-if="email">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                {{ email }}
              </q-item-section>
            </q-item>
          </div>
          <div v-else>
            <q-item clickable v-ripple @click="gotoLogin">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                Login
              </q-item-section>
            </q-item>
          </div>


          <!-- <q-item clickable v-ripple @click="gotoLogin">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              {{ email }}
            </q-item-section>
          </q-item> -->

          <q-item active clickable v-ripple @click="gotoRegister">
            <q-item-section avatar>
              <q-icon name="assignment_ind" />
            </q-item-section>
            <q-item-section>
              Register
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="q-mt-md" @click="gotoContact">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>
            <q-item-section>
              Contact
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="q-mt-md" @click="gotoAdminLogin">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              Admin
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      email: localStorage.getItem('email')

    }
  },
  setup() {

    return {
      drawer: ref(false)
    };
  },

  methods: {
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
    gotoReserve() {
      const value = localStorage.getItem("logincode")
      console.log(value)
      if (value != undefined) {
        this.$router.push({ name: "Reserve" });
      }
      else {
        this.$router.push({ name: "Login" });
      };
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    gotoNews() {
      this.$router.push({ name: "News" });
    },
    gotoShows() {
      this.$router.push({ name: "Shows" });
    },
    gotoFB() {
      this.$router.push({ name: "FB" });
    },
    gotoContact() {
      this.$router.push({ name: "Contact" });
    },
    gotoRegister() {
      this.$router.push({ name: "Register" });
    },
    gotoAdminLogin() {
      this.$router.push({ name: "AdminLogin" });
    },
  },
});
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>

