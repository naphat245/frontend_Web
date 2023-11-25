<template>
    <q-page>
        <div class="q-pa-lg q-px-xl">
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                control-color="primary" navigation padding arrows height="800px" class="shadow-2 rounded-borders">

                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders col-6"
                            style="padding: 100px; max-height: 700px; max-width: 700px; background-color: #dddd;" src="/" />
                        <div class="rounded-borders col-6 q-px-xl">
                            <h2 class="text-bold">FREE Drinks!</h2>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                        </div>
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap q-px-md">
                        <q-img class="rounded-borders col-6"
                            style="padding: 100px; max-height: 700px; max-width: 700px; background-color: #dddd;" src="/" />
                        <div class="rounded-borders col-6 q-px-xl">
                            <h2 class="text-bold">Coming Soon!</h2>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                        </div>
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="3" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders col-6"
                            style="padding: 100px; max-height: 700px; max-width: 700px; background-color: #dddd;" src="/" />
                        <div class="rounded-borders col-6 q-px-xl">
                            <h2 class="text-bold">Buy 3 Get Free 1</h2>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                        </div>
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="4" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders col-6"
                            style="padding: 100px; max-height: 700px; max-width: 700px; background-color: #dddd;" src="/" />
                        <div class="rounded-borders col-6 q-px-xl">
                            <h2 class="text-bold">Hot Set</h2>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                            <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                dolorum at
                                doloribus sequi dolores?
                                Cumque nobis, fugit delectus voluptates vel placeat qui numquam odit laboriosam tempora
                                accusamus error quis
                                iure!</p>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>

        <div class="Menu-book">
            <div class="Menu-title">
                <ul>- FOOD MENU -</ul>
            </div>
            <div class="Page">
                <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                    control-color="white" navigation padding arrows height="1200px" class="shadow-2 rounded-borders"
                    style="background-color: #0b0b0b;">

                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6" style=" background-color: #dddd;" src="/Menu/Menu4.png" />
                            <q-img class="rounded-borders col-6" style=" background-color: #dddd;" src="/Menu/Menu5.png" />
                        </div>
                    </q-carousel-slide>

                    <q-carousel-slide :name="2" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6" style=" background-color: #dddd;" src="/Menu/Menu2.png" />
                            <q-img class="rounded-borders col-6" style=" background-color: #dddd;" src="/Menu/Menu3.png" />
                        </div>
                    </q-carousel-slide>

                    <q-carousel-slide :name="3" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6" style="background-color: #dddd;" src="/Menu/Menu6.png" />
                            <q-img class="rounded-borders col-6" style="background-color: #dddd;" src="/Menu/Menu7.png" />
                        </div>
                    </q-carousel-slide>

                    <q-carousel-slide :name="4" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6" style="background-color: #dddd;" src="/Menu/Menu8.png" />
                            <q-img class="rounded-borders col-6" style="background-color: #dddd;" src="/Menu/Menu9.png" />
                        </div>
                    </q-carousel-slide>

                </q-carousel>
            </div>

        </div>

    </q-page>
</template>
  
<script>
import { defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
    name: "FBPage",

    setup() {
        return {
            slide: ref(1),

        };
    },

    methods: {
    },
});
</script>
  
<style >
.Menu-book {
    padding: 50px;
    display: block;
    align-items: center;
    justify-content: center;
    background-color: #200b06;
}

.Menu-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.Menu-title ul {
    list-style: none;
    padding: 20px 100px;
    margin: 0;
    font-size: 60px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 100px;
    border: 2px solid white;
    background-color: orangered;
}

.Page {
    margin: 0px 60px 100px 60px;
}

.row {
    display: flex;
}

.menu {
    min-width: 600px;
}

.image-menu {
    background-color: #bbb;
    min-width: 600px;
    min-height: 1200px;
    margin: 20px;
}
</style>
  