<template>
  <q-page>
    <div class="page-layout">
      <!-- Left Column -->
      <div class="column left-column" style="flex: 1">
        <!-- Content for the left column goes here -->
        <h3 class="text-white"><strong>TABLE MAP</strong></h3>
        <div class="stage">
          <Strong>S T A G E</Strong>
        </div>
        <div class="grid">
          <div v-for="row in 6" :key="row" class="row">
            <div v-for="col in 6" :key="col" class="grid-col" :class="{
              selected: isSelected(row, col),
              booked: isBooked(row, col),
            }" @click="toggleSelection(row, col)">
              {{ String.fromCharCode(65 + row - 1) }}{{ col }}
            </div>
          </div>
        </div>
        <div class="q-mt-xl">
          <p style="font-size: 25px; font-weight: 600; color: #ffffff">
            1 table can seat up to 4 people
          </p>
        </div>
        <ul class="showcase">
          <li>
            <div class="seat"></div>
            <strong>Available</strong>
          </li>
          <li>
            <div class="seat booked"></div>
            <strong>Booked</strong>
          </li>
          <li>
            <div class="seat selected"></div>
            <strong>Selected</strong>
          </li>
        </ul>
        <div class="warning">
          <q-btn flat dense round icon="warning" class="q-pb-md" />
          <p class="q-pt-md" style="font-size: 18px">
            You can only reserve a maximum of 6 tables per reservation.
          </p>
        </div>
      </div>

      <!----------- Right Column ------------>
      <div class="column right-column" style="flex: 1">
        <!-- Date Table Here -->
        <div class="Date-table q-pl-xl">
          <q-date color="secondary" v-model="date" landscape />
        </div>
        <!-- Show Number of customer selected -->
        <div class="selected-tables">
          <p class="Youhave">
            You have selected
            <span id="count">{{ selectedTables.length }}</span> tables
          </p>
          <!-- Show selected tables -->
          <ul class="selected-list">
            <li v-for="(table, index) in selectedTables" :key="index">
              {{ table.name }}
            </li>
          </ul>
        </div>
        <!-- Seserve form -->
        <!-- Name -->
        <q-form @submit.prevent="onSubmit" class="ReserveForm q-px-xl" ref="reserveForm">
          <q-input class="q-mb-md" v-model="reserveName" label="Your name" type="text" lazy-rules :rules="[
            (val) => (val && val.length > 0) || 'fill your username',
          ]" />
          <!-- Phune number -->
          <q-input class="q-my-lg" v-model="reserveTel" type="tel" label="Phone number" mask="### - ### - ####"
            unmasked-value lazy-rules :rules="[(val) => (val && val.length > 0) || 'fill your username',
            ]" />
          <!-- E-mail -->
          <q-input class="q-my-lg" color="primary" fill v-model="reserveEmail" type="text" label="Your Email" lazy-rules
            :rules="[emailValidate, requiredValidate]" />
          <!-- Needs -->
          <div>
            <q-input v-model="reserveMoreNeed" label="More special need" filled autogrow />
          </div>
        </q-form>
        <!-- Submit Button -->
        <div class="RS-btn">
          <q-btn rounded color="deep-orange" style="font-size: 25px; width: 300px" @click="reserveTables"><strong>Submit
              Reservation</strong>
          </q-btn>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { emailValidate, requiredValidate } from "../util/validation";
import { defineComponent } from "vue";
import { ref } from "vue";
import axios, { api } from "src/boot/axios";

export default defineComponent({
  name: "ReservationPage",

  setup() {
    const reserveName = ref("")
    const reserveTel = ref("")
    const reserveEmail = ref("")
    const reserveMoreNeed = ref("")

    return {
      reserveName,
      reserveTel,
      reserveEmail,
      reserveMoreNeed,
    }
  },

  data() {
    return {
      date: ref("2023/10/08"),

      tables: Array(6)
        .fill(null)
        .map((_, row) =>
          Array(6)
            .fill(null)
            .map((_, col) => ({
              row: row + 1,
              col: col + 1,
              name: `Table ${String.fromCharCode(65 + row)}${col + 1}`,
              selected: false,
              booked: false,
            }))
        ),
      selectedTables: [],
      maxSelectedTables: 6,

      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      first: ref(true),
      second: ref(true),
      third: ref(false),
      fourth: ref(true),
    };
  },

  methods: {
    emailValidate,
    requiredValidate,

    toggleSelection(row, col) {
      const table = this.tables[row - 1][col - 1];
      if (!table.booked) {
        if (
          !table.selected &&
          this.selectedTables.length >= this.maxSelectedTables
        ) {
          return;
        }

        // Toggle selection
        table.selected = !table.selected;
        this.updateSelectedTables();
      }
    },

    isSelected(row, col) {
      return this.tables[row - 1][col - 1].selected;
    },

    isBooked(row, col) {
      return this.tables[row - 1][col - 1].booked;
    },

    updateSelectedTables() {
      this.selectedTables = [];
      this.tables.forEach((row) => {
        row.forEach((table) => {
          if (table.selected) {
            this.selectedTables.push(table);
          }
        });
      });
    },

    async reserveTables() {
      for (const table of this.selectedTables) {
        const reserveCr = await api.post("admin/reserve", {
          reserve_date: this.date,
          reserve_name: this.reserveName,
          phone_number: this.reserveTel,
          email: this.reserveEmail,
          number_table: table.name, // Use the current table's name
          special_needs: this.reserveMoreNeed
        });

        // Handle the response or do something with reserveCr if needed
        console.log(reserveCr);
      }
      this.selectedTables.forEach((table) => {
        table.booked = true;
        table.selected = false;
      });
      this.updateSelectedTables();
    },
  },
});
</script>

<style scoped>
/* ---------------- Column Layout ---------------- */
.page-layout {
  display: flex;
  padding: 20px 10px;
  padding-bottom: 100px;
}

/* ---------------- Right Column ---------------- */

.ReserveForm {
  border: 2px solid rgb(255, 255, 255);
  display: block;
  margin-top: 50px;
  padding: 0px 100px;
}

.right-column {
  background-color: #ffffff;
  padding: 0px 20px;
  border-radius: 30px;

  display: block;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.Youhave {
  margin-left: 50px;
  font-size: 25px;
  color: #000000;
}

.selected-tables {
  margin-top: 30px;
  height: 110px;
}

.selected-tables span {
  color: orangered;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
}

.selected-tables ul {
  list-style: none;
}

.selected-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: -15px;
}

.selected-tables li {
  padding: 10px 15px;
  margin: 10px;
  background-color: #54b67a;
  border-radius: 5px;
  width: 100px;
  font-size: 16px;
  color: #000000;
}

.RS-btn {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

q-btn {
  margin-top: 20px;
}

/* ---------------- left Column ---------------- */
.left-column {
  background-color: #1b1a2c;
  border-radius: 30px;
  flex: 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: top;
  height: 80vh;
  min-height: 830px;
  min-width: 740px;
}

.stage {
  position: relative;
  background-color: white;
  width: 400px;
  height: 60px;
  margin: 0 auto;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stage Strong {
  font-size: 30px;
}

.grid-col.booked {
  background-color: #868686;
  cursor: not-allowed;
}

.grid {
  display: block;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}

.grid-col:nth-child(2) {
  margin-left: 30px;
}

.grid-col:nth-child(5) {
  margin-right: 30px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.grid-col {
  background-color: #54b67a;
  height: 45px;
  width: 70px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 15px;

}

.grid-col.selected {
  background-color: orangered;
}

.grid-col.booked {
  background-color: #ccc;
  cursor: not-allowed;
}

.showcase {
  padding: 10px 30px 0px 0px;
  border-radius: 5px;
  color: #ffffff;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.showcase li strong {
  margin-left: 2px;
}

.seat {
  background-color: #54b67a;
  height: 45px;
  width: 70px;
  margin: 6px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seat.selected {
  background-color: orangered;
}

.seat.booked {
  background-color: #ccc;
}

.warning {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bebebe;
}

@media (max-width: 768px) {
  .page-layout {
    flex-direction: column;
  }
}
</style>
