<template>
  <div class="q-pa-lg">
    <div class="q-gutter-md">
      <!-- Left Column: Preview Show Schedule -->
      <div class="pre-table">
        <q-table :rows="rows" :columns="columns" title="Preview Show Schedule" :rows-per-page-options="[]" row-key="name"
          wrap-cells>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>

              <q-td key="t2030" :props="props">
                <div>{{ props.row.t2030 }}</div>
                <q-popup-edit buttons v-model="props.row.t2030" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t2130" :props="props">
                <div>{{ props.row.t2130 }}</div>
                <q-popup-edit buttons v-model="props.row.t2130" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t2200" :props="props">
                <div>{{ props.row.t2200 }}</div>
                <q-popup-edit buttons v-model="props.row.t2200" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t2300" :props="props">
                <div>{{ props.row.t2300 }}</div>
                <q-popup-edit buttons v-model="props.row.t2300" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t2330" :props="props">
                <div>{{ props.row.t2330 }}</div>
                <q-popup-edit buttons v-model="props.row.t2330" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t0030" :props="props">
                <div>{{ props.row.t0030 }}</div>
                <q-popup-edit buttons v-model="props.row.t0030" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>

              <q-td key="t0100" :props="props">
                <div>{{ props.row.t0100 }}</div>
                <q-popup-edit buttons v-model="props.row.t0100" v-slot="scope">
                  <q-input type="textarea" v-model="scope.value" autofocus counter @keyup.enter.stop />
                </q-popup-edit>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>

      <!-- Right Column: Form -->
      <div class="edit-form">
        <div class="q-gutter-md">
          <q-select v-model="selectedDay" :options="days" label="Day"></q-select>
          <q-select v-model="selectedTime" :options="times" label="Time"></q-select>
          <q-input v-model="textInput" label="Band Name"></q-input>
          <q-btn label="Reset" type="submit" color="orange" flat @click="resetForm" />
          <q-btn label="Submit" type="reset" color="orange" @click="submitForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

const columns = [
  {
    name: "name",
    style: "font-size: 20px; font-weight: 600; min-width: 100px",
    label: "DAY",
    align: "left",
  },

  {
    name: "t2030",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "20.30 - 21.30",
    field: "t2030",
  },

  {
    name: "t2130",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "21.30 - 22.00",
    field: "t2130",
  },

  {
    name: "t2200",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "22.00 - 23.00",
    field: "t2200",
  },

  {
    name: "t2300",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "23.00 - 23.30",
    field: "t2300",
  },

  {
    name: "t2330",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "23.30 - 00.30",
    field: "t2330",
  },

  {
    name: "t0030",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "00.30 - 01.00",
    field: "t0030",
  },

  {
    name: "t0100",
    style: "font-size: 18px; font-weight: 400; min-width: 100px",
    label: "01.00 - 02.00",
    field: "t0100",
  },
];
const rows = [
  {
    name: "Sunday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Monday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Tuesday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Wednesday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Thursday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Firday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
  {
    name: "Saturday",
    t2030: "A Band",
    t2130: "A Band",
    t2200: "A Band",
    t2300: "A Band",
    t2330: "A Band",
    t0030: "A Band",
    t0100: "A Band",
  },
];
import api from "src/boot/axios";
export default defineComponent({
  name: "ShowsDash",

  setup() {
    return {
      rows: ref(rows),
      columns,
      tab: ref("MNG-reserves"),
      selectedDay: ref(null),
      selectedTime: ref(null),
      textInput: ref(""),
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      times: [
        "20:30 - 21:30",
        "21:30 - 22:00",
        "22:00 - 23:00",
        "23:00 - 23:30",
        "23:30 - 00:30",
        "00:30 - 01:00",
        "01:00 - 02:00",
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = {
          start_date: this.selectedDay,
          time_show: this.selectedTime,
          band: this.textInput,
        };

        // Make a POST request to your backend endpoint
        const response = await api.post("/createStage", formData);

        // Check if the request was successful
        if (response.status === 200) {
          console.log("Form submitted successfully!");
          // Reset the form fields after successful submission
          this.resetForm();
        } else {
          console.error(
            "Failed to submit form. Server returned:",
            response.data
          );
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
      }
    },

    resetForm() {
      // Reset form fields to their initial state
      this.selectedDay = null;
      this.selectedTime = null;
      this.textInput = "";
    },
  },

  data() {
    return {};
  },
});
</script>

<style></style>
