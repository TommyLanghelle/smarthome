<template>
  <div>
      <v-item-group active-class="primary" @change="setPreset">
      <v-container >
        <v-row>
          <v-col cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }" value="lightsAllOn">
              <v-card class="d-flex align-center" dark height="50" @click="toggle">
                <v-scroll-y-transition>
                  <div v-if="active" class="display-1 flex-grow-1 text-center"> All On </div>
                  <div v-else class="display-1 flex-grow-1 text-center">All On</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }" value="lightsAllOff">
              <v-card class="d-flex align-center" dark height="50" @click="toggle">
                <v-scroll-y-transition>
                  <div v-if="active" class="display-1 flex-grow-1 text-center"> All Off </div>
                  <div v-else class="display-1 flex-grow-1 text-center">All Off</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }" value="lightsMovieTime">
              <v-card class="d-flex align-center" dark height="50" @click="toggle">
                <v-scroll-y-transition>
                  <div v-if="active" class="display-1 flex-grow-1 text-center"> Movie Time </div>
                  <div v-else class="display-1 flex-grow-1 text-center">Movie Time</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>


    <v-row class="mb-12 flex-wrap">
        <v-col>
            <v-card class="mx-auto" max-width="344" min-width="200" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Livingroom</v-list-item-title>
                    <v-list-item-subtitle>Control lights in the livingroom</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-col>
                    <v-switch v-model="livingroom_roof" :label="`Roof`"></v-switch>
                    <v-switch v-model="livingroom_media_table" :label="`Media Table`"></v-switch>
                </v-col>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="mx-auto" max-width="344" min-width="200" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Kitchen</v-list-item-title>
                    <v-list-item-subtitle>Control lights in the kitchen</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-col>
                    <v-switch v-model="kitchen_dining_area" :label="`Dining area`"></v-switch>
                    <v-switch v-model="kitchen_sink" :label="`Above sink`"></v-switch>
                    <v-switch v-model="kitchen_spotlights" :label="`Spotlight`"></v-switch>
                </v-col>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="mx-auto" max-width="344" min-width="200" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Bedroom</v-list-item-title>
                    <v-list-item-subtitle>Control lights in the bedroom</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-col>
                    <v-switch v-model="bedroom_roof" :label="`Roof`"></v-switch>
                    <v-switch v-model="bedroom_nightstand" :label="`Nightstand`"></v-switch>
                </v-col>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="mx-auto" max-width="344" min-width="200" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Hallway</v-list-item-title>
                    <v-list-item-subtitle>Control lights in the hallway</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-col>
                    <v-switch v-model="hallway_roof" :label="`Roof`"></v-switch>
                </v-col>
            </v-card>
        </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {
    data() {
        return {
            temperature: 22,
            livingroom_roof: false,
            livingroom_media_table: false,
            kitchen_dining_area: false,
            kitchen_sink: false,
            kitchen_spotlights: false,
            bedroom_roof: false,
            bedroom_nightstand: false,
            hallway_roof: false
        }
    },
    methods: {
        presetAll(booleanVal) {
            this.livingroom_roof = booleanVal
            this.livingroom_media_table = booleanVal
            this.kitchen_dining_area = booleanVal
            this.kitchen_sink = booleanVal
            this.kitchen_spotlights = booleanVal
            this.bedroom_roof = booleanVal
            this.bedroom_nightstand = booleanVal
            this.hallway_roof = booleanVal
        },
        presetMovieTime() {
            this.presetAll(false)
            this.livingroom_media_table = true
            this.kitchen_dining_area = true
        },
        setPreset(value) {
            switch (value) {
                case 'lightsMovieTime':
                    this.presetMovieTime()
                    break;
                case 'lightsAllOn':
                    this.presetAll(true)
                    break;
                case 'lightsAllOff':
                    this.presetAll(false)
                    break;
            }
        }
    }
  }
</script>