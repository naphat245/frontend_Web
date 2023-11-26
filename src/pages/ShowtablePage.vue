<template>
  <q-page style="margin-top: 2px;">
    <q-card>
      <q-img src="/image01.png" style="min-height: 300px; max-height: 700px;">
        <div class="full-width full-height row items-center justify-center" style="min-height: 600px; max-height: 700px;">
          <div class="Band-table">
            <div class="show-title">
              <ul>MUSIC SHOW SCHEDULE</ul>
            </div>

            <div class="Schedule-table">
              <q-table flat bordered title="Show Schedule" :rows="rows" :columns="columns" row-key="name" dark
                color="white" :separator="separator" />
            </div>

            <div class="music-band">
              <ul>MUSIC BANDS</ul>
            </div>

          </div>
        </div>
      </q-img>
    </q-card>


    <div class="slide-card q-pa-lg q-px-xl">
      <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
        control-color="primary" navigation padding arrows height="800px" class="shadow-2 rounded-borders">
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-video class="rounded-borders col-6" style="height: 700px;"
              src="https://www.youtube.com/embed/ccmLF940FJI" />
            <div class="rounded-borders col-6 q-px-xl">
              <h2 class="text-bold">The First Band</h2>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap q-px-md">
            <q-video class="rounded-borders col-6" style="height: 700px;"
              src="https://www.youtube.com/embed/xCrpArgVEHI" />
            <div class="rounded-borders col-6 q-px-xl">
              <h2 class="text-bold">The Second Band</h2>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-video class="rounded-borders col-6" style="height: 700px;"
              src="https://www.youtube.com/embed/9BX3fxMmcE8" />
            <div class="rounded-borders col-6 q-px-xl">
              <h2 class="text-bold">The Third Band</h2>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
              <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
                doloribus sequi dolores?
                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error
                quis
                iure!</p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'


const columns = [
  {
    name: 'name',
    style: 'font-size: 20px; font-weight: 600; min-width: 150px',
    required: true,
    label: 'DAY',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,

  },
  {
    name: 't2030',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '20.30 - 21.30',
    field: 't2030'
  },

  {
    name: 't2130',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '21.30 - 22.00',
    field: 't2130'
  },

  {
    name: 't2200',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '22.00 - 23.00',
    field: 't2200'
  },

  {
    name: 't2300',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '23.00 - 23.30',
    field: 't2300'
  },

  {
    name: 't2330',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '23.30 - 00.30',
    field: 't2330'
  },

  {
    name: 't0030',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '00.30 - 01.00',
    field: 't0030'
  },

  {
    name: 't0100',
    style: 'font-size: 18px; font-weight: 400; min-width: 100px',
    label: '01.00 - 02.00',
    field: 't0100'
  },
]

var rows = [
  {
    name: 'Sunday',
    t2030: 'A Band',
    t2130: 'B Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'C Band',
    t0030: 'A Band',
    t0100: 'A Band',

  },
  {
    name: 'Monday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },
  {
    name: 'Tuesday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },
  {
    name: 'Wednesday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },
  {
    name: 'Thursday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },
  {
    name: 'Firday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },
  {
    name: 'Saturday',
    t2030: 'A Band',
    t2130: 'A Band',
    t2200: 'A Band',
    t2300: 'A Band',
    t2330: 'A Band',
    t0030: 'A Band',
    t0100: 'A Band',
  },

]

export default defineComponent({
  name: "ShowtablePage",
  setup() {
    return {
      slide: ref(1),
      separator: ref('vertical'),
    };
  },
  async mounted() {
    // Call your function when the component is mounted
    console.log("ty")
    try {
      const response = await this.$api.get('http://localhost:3000/admin/stage');
      // Set the response data to the reactive variable
      var data = response.data
      data.forEach(element => {
        if (element.start_date == "sunday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[0].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[0].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[0].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[0].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[0].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[0].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[0].t0100 = element.band
          }
        }
        if (element.start_date == "monday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[1].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[1].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[1].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[1].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[1].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[1].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[1].t0100 = element.band
          }
        }
        if (element.start_date == "tuesday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[2].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[2].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[2].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[2].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[2].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[2].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[2].t0100 = element.band
          }
        }
        if (element.start_date == "wednesday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[3].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[3].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[3].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[3].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[3].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[3].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[3].t0100 = element.band
          }
        }
        if (element.start_date == "thursday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[4].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[4].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[4].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[4].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[4].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[4].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[4].t0100 = element.band
          }
        }
        if (element.start_date == "firday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[5].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[5].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[5].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[5].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[5].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[5].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[5].t0100 = element.band
          }
        }
        if (element.start_date == "saturday") {
          if (element.time_show == "20.30-21.30") {
            this.rows[6].t2030 = element.band
          }
          if (element.time_show == "21.30-22.00") {
            this.rows[6].t2130 = element.band
          }
          if (element.time_show == "22.00-23.00") {
            this.rows[6].t2200 = element.band
          }
          if (element.time_show == "23.00-23.30") {
            this.rows[6].t2300 = element.band
          }
          if (element.time_show == "23.30-00.30") {
            this.rows[6].t2330 = element.band
          }
          if (element.time_show == "00.30-01.00") {
            this.rows[6].t0030 = element.band
          }
          if (element.time_show == "01.00-02.00") {
            this.rows[6].t0100 = element.band
          }
        }
      });
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
  },
  data() {
    return {
      columns,
      rows,
    }
  },
});
</script>

<style >
.show-title {
  display: flex;
  justify-content: center;
  align-items: cen;
}

.show-title ul {
  list-style: none;
  padding: 20px 50px;
  margin: 0;
  font-size: 60px;
  font-weight: bold;
  color: #ffffff;
}

.slide-card {
  background-color: #0c0705;
}

.music-band {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.music-band ul {
  list-style: none;
  padding: 10px 80px;
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  background-color: orangered;
  border-radius: 100px;
}
</style>
