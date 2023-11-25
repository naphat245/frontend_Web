<template>
  <div style="text-align: center">
    <h2 style="margin-bottom: 0px"><strong>All User</strong></h2>
  </div>
  <div class="q-pa-md">
    <q-table title="Edit User" :rows="rows" :columns="columns" row-key="id">
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-btn v-if="props.row.status == 'Pending'" color="negative" label="pending" text-color="white" />
            <q-btn v-else-if="props.row.status == 'In-process'" color="yellow-8" label="in-process" text-color="white" />
            <q-btn v-if="props.row.status == 'Finished'" color="positive" label="finished" text-color="white" />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { requestDBStore } from "../stores/RequestStore";
import { userDBStore } from "../stores/Userdb";
import { useLoginUserStore } from "../stores/loginUserStore";


export default defineComponent({
  name: "UsersDashboard",

  setup() {
    return {

    };
  },

  data() {
    return {
      requestdb: requestDBStore(),
      userdb: userDBStore(),
      columns: [
        {
          name: "id",
          required: true,
          label: "User ID",
          align: "left",
          field: (row) => row.name,
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: "username", align: "left", label: "Username", field: "requestDate", },
        { name: "email", align: "left", label: "E-mail", field: "email" },
        { name: "telNum", align: "left", label: "Tel", field: "telNum" },
      ],
      storeLogUser: useLoginUserStore(),
      rows: []
    }
  },

  async getData() {
    if (this.storeLogUser.getAcessToken == "") {
      Notify.create({
        type: "negative",
        message: "Please login before using the system",
      });
      this.$router.push('/')
    }
    await this.$api.get("/auth/request/get/" + this.storeLogUser.getUserId)
      .then((res) => {
        if (res.status == 200) {
          this.rows = res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async mounted() {
    await this.getData();
    // this.dataReady = true;
  },

});
</script>

<style ></style>
