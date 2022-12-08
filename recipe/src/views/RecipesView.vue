<script setup>
import { appKey, appId } from "../api-info";
</script>

<template>
  <main>
    <v-text-field label="query" v-model="query" />
    <v-btn v-on:click="search">Search</v-btn>
    <div class="item-card">
      <v-card
        class="item-cards"
        max-width="500"
        variant="outlined"
        v-for="recipe of recipes"
        :key="recipe.recipe.uri"
      >
        <v-col v-for="n in 3" :key="n" sm="4">
          <v-img
            :src="recipe.recipe.image"
            class="align-end"
            height="200px"
            cover
          >
          </v-img>

          <v-card-actions>
            <v-card-title class="item-title">
              {{ recipe.recipe.label }}
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
      </v-card>
    </div>

    <!--    <v-row>
      <v-col v-for="n in 3" :key="n" sm="4">
        <v-card width="500" v-for="recipe of recipes" :key="recipe.recipe.uri">
          <img :src="recipe.recipe.image" />
          <p>{{ recipe.recipe.label }}</p>
        </v-card>
      </v-col>
    </v-row> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      query: "",
    };
  },
  methods: {
    async search() {
      const basrUrl = "https://api.edamam.com/api/recipes/v2";
      const url = `${basrUrl}?type=public&q=${this.query}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.recipes = data.hits;
    },
  },
};
</script>

<style>
.mx-auto .item-title {
  font-size: 10px;
}
.item-card {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.item-cards {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}
</style>
