<template>
  <q-page class="q-pa-lg">
    <div class="flex justify-evenly" style="margin: 50px">
      <div class="Date-table q-pl-xl">
        <q-date color="red-10" v-model="date" landscape />
      </div>

      <!-- Number of Reservation Today  -->
      <q-card dark bordered class="bg-orange-8 my-card" style="width: 300px">
        <q-card-section style="text-align: center">
          <div class="text-h4">Reservation today</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section style="text-align: center">
          <strong style="font-size: 100px;">{{ reserveToday }}</strong>
        </q-card-section>
      </q-card>

      <!-- NUmber of Weekly Reservation-->
      <q-card dark bordered class="bg-green my-card" style="width: 300px">
        <q-card-section style="text-align: center">
          <div class="text-h4">Weekly Reservation</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section style="text-align: center">
          <strong style="font-size: 100px;">{{ weeklyReserve }}</strong>
        </q-card-section>
      </q-card>
    </div>

    <!-- Reservation Table -->
    <div style="text-align: center; margin-top: 100px;">
      <h2 style="margin-bottom: 0px">Reservation Dashboard</h2>
    </div>
    <div class="q-pa-sm">
      <q-table title="Edit Reservation" :rows="showData()" :columns="this.columns" row-key="id">
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div>
              <!-- Status -->
              <q-btn rounded v-if="props.row.status == '0'" color="negative" label="pending" text-color="white" />
              <q-btn rounded v-if="props.row.status == '1'" color="positive" label="Confirmed" text-color="white" />
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-reserveEdit="props">
          <q-td :props="props">
            <q-btn class="q-mx-sm" v-if="props.row.status !== 'Confirmed'" rounded color="blue-10" icon="edit"
              text-color="white" @click="editRow(props.row)" />
            <q-btn class="q-mx-sm" v-if="props.row.status !== 'Confirmed'" round color="red" icon="delete"
              text-color="white" @click="deleteRow(props.row)" />
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- Edit Form Dialog -->
    <q-dialog v-model="showEditDialog">
      <q-card>
        <q-card-section>
          <q-form @submit="submitEditForm">
            <!-- Replace the following with your actual edit form fields -->
            <q-input v-model="editFormData.reserveName" label="Reserve Name" />
            <q-input v-model="editFormData.reserveTel" label="Phone Number" />
            <!-- Add more fields as needed -->

            <q-btn type="submit" label="Save" color="positive" />
            <q-btn label="Cancel" color="negative" @click="cancelEdit" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref, onMounted, computed } from 'vue';
import { Dialog } from "quasar";
import { api } from '../boot/axios'

export default defineComponent({
  name: "ReserveDash",
  // setup() {
  //   const selectDate = ref("")
  //   const rows = ref([]);
  //   const columns = [
  //     {
  //       name: "reserveID",
  //       required: true,
  //       label: "Reserve ID",
  //       align: "left",
  //       field: "reserveID",
  //       // field: (row) => row.name,
  //       format: (val) => `${val}`,
  //       sortable: true,
  //     },
  //     { name: "reserveDate", align: "center", label: "Date", field: "reserveDate", style: 'max-width: 100px' },
  //     { name: "reserveName", align: "center", label: "Reserve Name", field: "reserveName" },
  //     { name: "reserveTel", align: "center", label: "Phone Number", field: "reserveTel" },
  //     { name: "reserveEmail", align: "center", label: "E-mail", field: "reserveEmail" },
  //     { name: "tableID", align: "center", label: "Table", field: "tableID", style: 'min-width: 100px' },
  //     { name: "specialNeed", align: "center", label: "Special Needs", field: "specialNeed", style: 'max-width: 200px' },
  //     { name: "status", align: "center", label: "Status", field: "status" },
  //     {
  //       name: "reserveEdit", align: "center", label: "Edit", field: "reserveEdit", style: 'max-width: 100px',
  //       "edit-action": true, "delete-action": true, "custom": true,
  //     },
  //   ];
  //   const fetchData = async () => {
  //     try {
  //       console.log(selectDate.value);
  //       const response = await api.get("/admin/reserve");
  //       console.log(response.data);
  //       rows.value = response.data.filter(item => item.reserve_date === selectDate.value).map((reservation) => ({
  //         reserveID: reservation.id,
  //         reserveDate: reservation.reserve_date,
  //         reserveName: reservation.reserve_name,
  //         reserveTel: reservation.phone_number,
  //         reserveEmail: reservation.email,
  //         tableID: reservation.number_table,
  //         specialNeed: reservation.special_needs,
  //         status: reservation.status, // You might need to adjust this based on your data
  //         // reserveEdit: "Edit", // You might need to adjust this based on your data
  //       }));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const editRow = (row) => {
  //     // Set the initial values in the edit form
  //     editFormData.value = { ...row };
  //     // Show the edit form dialog
  //     showEditDialog.value = true;
  //   };
  //   const submitEditForm = async () => {
  //     try {
  //       // Make an API request to update the reservation
  //       const response = await api.put(`/admin/reserve/${editFormData.value.reserveID}`, editFormData.value);
  //       // Handle the response as needed
  //       console.log('Reservation updated:', response.data);

  //       // Refresh the data after the edit
  //       fetchData();

  //       // Close the edit form dialog
  //       showEditDialog.value = false;
  //     } catch (error) {
  //       console.error('Error updating reservation:', error);
  //     }
  //   };
  //   const cancelEdit = () => {
  //     // Close the edit form dialog without saving
  //     showEditDialog.value = false;
  //   };
  //   onMounted(() => {
  //     fetchData();
  //   });
  //   return {
  //     confirm: ref(false),
  //     fetchData,
  //     rows,
  //     columns,
  //     editRow,
  //     submitEditForm,
  //     cancelEdit,
  //     selectDate
  //   };
  // },
  data() {
    return {
      date: "",
      reservaData: "",
      columns: [
        {
          name: "reserveID",
          required: true,
          label: "Reserve ID",
          align: "left",
          field: "reserveID",
          // field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: "reserveDate", align: "center", label: "Date", field: "reserveDate", style: 'max-width: 100px' },
        { name: "reserveName", align: "center", label: "Reserve Name", field: "reserveName" },
        { name: "reserveTel", align: "center", label: "Phone Number", field: "reserveTel" },
        { name: "reserveEmail", align: "center", label: "E-mail", field: "reserveEmail" },
        { name: "tableID", align: "center", label: "Table", field: "tableID", style: 'min-width: 100px' },
        { name: "specialNeed", align: "center", label: "Special Needs", field: "specialNeed", style: 'max-width: 200px' },
        { name: "status", align: "center", label: "Status", field: "status" },
        {
          name: "reserveEdit", align: "center", label: "Edit", field: "reserveEdit", style: 'max-width: 100px',
          "edit-action": true, "delete-action": true, "custom": true,
        },
      ],
    }
  },
  computed() {


  },
  async mounted() {
    this.reservaData = await api.get("/admin/reserve").then(res => res.data);

  },

  // data() {
  //   return {
  //     date: ref("2023/10/15"),
  //     reserveToday: 0,
  //     weeklyReserve: 0,
  //     columns: [
  //       {
  //         name: "reserveID",
  //         required: true,
  //         label: "Reserve ID",
  //         align: "left",
  //         field: "reserveID",
  //         field: (row) => row.name,
  //         format: (val) => `${val}`,
  //         sortable: true,
  //       },
  //       { name: "reserveDate", align: "center", label: "Date", field: "reserveDate", style: 'max-width: 100px' },
  //       { name: "reserveName", align: "center", label: "Reserve Name", field: "reserveName" },
  //       { name: "reserveTel", align: "center", label: "Phone Number", field: "reserveTel" },
  //       { name: "reserveEmail", align: "center", label: "E-mail", field: "reserveEmail" },
  //       { name: "tableID", align: "center", label: "Table", field: "tableID", style: 'min-width: 100px' },
  //       { name: "specialNeed", align: "center", label: "Special Needs", field: "specialNeed", style: 'max-width: 200px' },
  //       { name: "status", align: "center", label: "Status", field: "status" },
  //       {
  //         name: "reserveEdit", align: "center", label: "Edit", field: "reserveEdit", style: 'max-width: 100px',
  //         "edit-action": true, "delete-action": true, "custom": true,
  //       },
  //     ],
  //     rows: [
  //       {
  //         name: 'gq01',
  //         reserveDate: '20.10.2023',
  //         reserveName: 'Naphat',
  //         reserveTel: '099-999-9999',
  //         reserveEmail: 'Naphat@Email.com',
  //         tableID: 'C1,C2,C3,C4',
  //         specialNeed: 'Give me a lot of beers',
  //         status: 'Pending',
  //         reserveEdit: 'Edit',
  //         actions: 'Actions',

  //       },
  //       {
  //         name: 'gq02',
  //         reserveDate: '18.10.2023',
  //         reserveName: 'Party',
  //         reserveTel: '011-111-1111',
  //         reserveEmail: 'Party@Email.com',
  //         tableID: 'F6',
  //         specialNeed: 'Give some bucket to Naphat',
  //         status: 'Prepared',
  //         reserveEdit: '',
  //         actions: 'Actions',
  //       },
  //       {
  //         name: 'gq03',
  //         reserveDate: '16.10.2023',
  //         reserveName: 'Nicki',
  //         reserveTel: '022-222-2222',
  //         reserveEmail: 'Nicki@Email.com',
  //         tableID: 'A1',
  //         specialNeed: 'Nothing',
  //         status: 'Confirmed',
  //         reserveEdit: '',
  //         actions: 'Actions',
  //       },

  //     ],
  //   }
  // },
  methods: {
    // editRow(row) {
    //   console.log('Edit action for row:', row);
    // },
    showData() {
      if (this.reservaData) {
        if (this.date === "") {
          const data = this.reservaData.map((reservation) => ({
            reserveID: reservation.id,
            reserveDate: reservation.reserve_date,
            reserveName: reservation.reserve_name,
            reserveTel: reservation.phone_number,
            reserveEmail: reservation.email,
            tableID: reservation.number_table,
            specialNeed: reservation.special_needs,
            status: reservation.status, // You might need to adjust this based on your data
            // reserveEdit: "Edit", // You might need to adjust this based on your data
          }));
          return data
        } else {
          this.reserveToday = this.reservaData.filter(item => item.reserve_date === this.date).map((reservation) => ({
            reserveID: reservation.id,
            reserveDate: reservation.reserve_date,
            reserveName: reservation.reserve_name,
            reserveTel: reservation.phone_number,
            reserveEmail: reservation.email,
            tableID: reservation.number_table,
            specialNeed: reservation.special_needs,
            status: reservation.status, // You might need to adjust this based on your data
            // reserveEdit: "Edit", // You might need to adjust this based on your data
          })).length;
          this.weeklyReserve = this.reservaData.length;

          const data = this.reservaData.filter(item => item.reserve_date === this.date).map((reservation) => ({
            reserveID: reservation.id,
            reserveDate: reservation.reserve_date,
            reserveName: reservation.reserve_name,
            reserveTel: reservation.phone_number,
            reserveEmail: reservation.email,
            tableID: reservation.number_table,
            specialNeed: reservation.special_needs,
            status: reservation.status, // You might need to adjust this based on your data
            // reserveEdit: "Edit", // You might need to adjust this based on your data
          }));
          return data
        }
      } else[]

    },
    deleteRow(row) {
      Dialog.create({
        title: "Delete Confirmation",
        message: "Are you sure you want to delete this entry?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          this.deleteRow(row);
        })
        .onCancel(() => {
        });
    },
  },
});
</script>

<style >
.showtables {
  border: 5px solid red;
}
</style>
