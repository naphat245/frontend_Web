<template>
  <q-layout vview="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header class="q-py-md bg-black shadow-10">
      <q-toolbar>
        <div class="title q-mx-auto q-my-md">
          <strong>Admin Dashboard Page</strong>
        </div>
        <q-btn push color="orange-5" round icon="logout" @click="gotoLogout" />
      </q-toolbar>
      <q-tabs v-model="tab" class="">
        <q-tab alert="red" name="MNG-reserves" icon="style" label="Reservations" @click="gotoAdmin" />
        <q-tab alert="red" name="MNG-users" icon="person" label="Users" @click="gotoUsersDash" />
        <q-tab name="MNG-news" icon="star" label="News" @click="gotoNewsDash" />
        <q-tab name="MNG-showtables" icon="event" label="Show Table" @click="gotoShowsDash" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DashboardLayout",

  setup() {
    return {
      tab: ref('MNG-reserves'),
    };
  },

  methods: {
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
    gotoAdmin() {
      this.$router.push({ name: "Admin" });
    },
    gotoUsersDash() {
      this.$router.push({ name: "UsersDash" });
    },
    gotoNewsDash() {
      this.$router.push({ name: "NewsDash" });
    },
    gotoShowsDash() {
      this.$router.push({ name: "ShowsDash" });
    },

  },
});
</script>


<style scoped>
.title strong {
  font-size: 50px;
  color: rgb(255, 166, 57);
}
</style>

