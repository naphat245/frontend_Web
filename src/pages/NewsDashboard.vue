<template>
  <q-page class="q-pa-lg q-px-xl">
    <div style="text-align: center; margin-top: 100px;">
      <h2 style="margin-bottom: 0px">News&Promotion Editing</h2>
    </div>
    <div class="q-pa-md">
      <q-table title="Edit Highlight" :rows="rows" :columns="columns" row-key="id">
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div>
              <q-btn v-if="props.row.status == 'Pending'" color="negative" label="pending" text-color="white" />
              <q-btn v-else-if="props.row.status == 'Have-prepared'" color="yellow-8" label="in-process"
                text-color="white" />
              <q-btn v-if="props.row.status == 'Confirmed'" color="positive" label="finished" text-color="white" />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md">
      <q-table title="Edit News" :rows="rows" :columns="columns" row-key="id">
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div>
              <q-btn v-if="props.row.status == 'Pending'" color="negative" label="pending" text-color="white" />
              <q-btn v-else-if="props.row.status == 'Have-prepared'" color="yellow-8" label="in-process"
                text-color="white" />
              <q-btn v-if="props.row.status == 'Confirmed'" color="positive" label="finished" text-color="white" />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md">
      <q-table title="Edit Comming Soon" :rows="rows" :columns="columns" row-key="id">
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div>
              <q-btn v-if="props.row.status == 'Pending'" color="negative" label="pending" text-color="white" />
              <q-btn v-else-if="props.row.status == 'Have-prepared'" color="yellow-8" label="in-process"
                text-color="white" />
              <q-btn v-if="props.row.status == 'Confirmed'" color="positive" label="finished" text-color="white" />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'


export default defineComponent({
  name: "NewsDash",

  setup() {
    return {

    };
  },

  data() {
    return {
      date: ref("2023/10/15"),
      columns: [
        {
          name: "newsID", label: "News ID", align: "left", field: "reserveID",
          required: true, field: (row) => row.name, format: (val) => `${val}`, sortable: true,
        },
        { name: "reserveDate", align: "center", label: "Date", field: "reserveDate", style: 'max-width: 100px' },
        { name: "reserveName", align: "center", label: "Reserve Name", field: "reseveName" },
        { name: "tableID", align: "center", label: "Table", field: "tableID", style: 'min-width: 200px' },
        { name: "specialNeed", align: "center", label: "Special Needs", field: "specialNeed", style: 'max-width: 200px' },
        { name: "status", align: "center", label: "Status", field: "status" },
      ],
      rows: [],
    }
  },

});
</script>

<style ></style>
