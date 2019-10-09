<template>
      <v-card-text>
        <v-row>
          <v-col>
            <v-slider
              v-model="temperature"
              class="align-center"
              :max="40"
              :min="0"
              hide-details
            >
            <template v-slot:append>
              <v-text-field
                v-model="temperature"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
</template>
  <script>
  export default {
    data() {
        return {
            temperature: 22
        }
    }
  }
  </script>