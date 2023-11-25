<template>
  <q-page class="q-pa-lg q-px-xl">
    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
      control-color="primary" navigation padding arrows height="800px" class="shadow-2 rounded-borders">

      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6" style="padding: 100px; max-height: 700px; max-width: 700px;"
            src="/news01.jpg" />
          <div class="rounded-borders col-6 q-px-xl">
            <h2 class="text-bold">FREE! CONCERT</h2>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap q-px-md">
          <q-img class="rounded-borders col-6" style="padding: 100px; max-height: 700px; max-width: 700px;"
            src="/news02.jpg" />
          <div class="rounded-borders col-6 q-px-xl">
            <h2 class="text-bold">Coming Soon!</h2>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6" style="padding: 100px; max-height: 700px; max-width: 700px;"
            src="/news03.jpg" />
          <div class="rounded-borders col-6 q-px-xl">
            <h2 class="text-bold">THE BIG ASS</h2>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6" style="padding: 100px; max-height: 700px; max-width: 700px;"
            src="/news04.jpg" />
          <div class="rounded-borders col-6 q-px-xl">
            <h2 class="text-bold">ANOUCEMENT</h2>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum at
              doloribus sequi dolores?
              Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora accusamus error quis
              iure!</p>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>


    <div class="News">
      <div class="row">
        <div class="text-h2 text-white q-py-lg q-mx-auto" style="font-weight: 800;">
          NEWS
        </div>
      </div>
      <div class=" row">
        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news01.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news02.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news03.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="Coming-soon">
      <div class="row">
        <div class="text-h2 text-primary q-py-lg q-mx-auto" style="font-weight: 600;">
          COMING SOON
        </div>
      </div>
      <div class="row">
        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news01.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news02.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news03.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="Promotions">
      <div class="row">
        <div class="text-h2 text-white q-py-lg q-mx-auto" style="font-weight: 800;">
          PROMOTIONS
        </div>
      </div>
      <div class="row">
        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news01.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news02.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-4 col-md-4">
          <div class="q-pa-md row items-start q-gutter-md"></div>
          <q-card class="news-card q-mx-sm">
            <q-img src="/news03.jpg">
              <div class="absolute-bottom text-h6">News</div>
            </q-img>
            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue"
import { ref } from 'vue'

export default defineComponent({
  name: "NewsPage",

  setup() {
    return {
      slide: ref(1),
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

<style >
.News {
  border-radius: 30px;
  background-color: #200b06;
  padding: 20px;
}

.Coming-soon {
  border-radius: 30px;
  border: 2px solid #200b06;
  margin-top: 30px;
  padding: 20px;

}

.Promotions {
  border-radius: 30px;
  background-color: #200b06;
  margin-top: 30px;
  padding: 20px;
}

.col-4 {
  padding: 50px;
}
</style>
