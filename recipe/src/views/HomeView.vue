<script setup>
import axios from "axios";
</script>

<template>
  <main>
    <div class="cards">
      <div class="card">
        <v-card
          class="mx-auto"
          max-width="344"
          variant="outlined"
          v-for="liste of listes"
          :key="liste.capital"
        >
          <v-row>
            <v-col>
              <v-img
                :src="liste.flags.png"
                class="align-end"
                height="200px"
                cover
              >
              </v-img>

              <v-card-actions>
                <v-card-title class="item-title">
                  {{ liste.name.common }}
                </v-card-title>

                <v-spacer></v-spacer>

                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-heart"
                ></v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      listes: [],
    };
  },

  async mounted() {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    console.log(result);
    this.listes = result.data;
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.card {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}
</style>
