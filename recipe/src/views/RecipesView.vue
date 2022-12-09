<script setup>
import { appKey, appId } from "../api-info";
import {
  useFirestore,
  getCurrentUser,
  useCollection,
  useCurrentUser,
} from "vuefire";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const user = useCurrentUser();
</script>

<template>
  <main>
    <div class="query-search">
      <v-text-field label="query" v-model="searchQuery" />
      <v-btn v-on:click="search">Rechercher</v-btn>
    </div>

    <div class="item-card">
      <v-card
        class="item-cards"
        variant="outlined"
        v-for="recipe of recipes"
        :key="recipe.recipe.uri"
      >
        <v-img
          :src="recipe.recipe.image"
          class="align-end"
          height="200px"
          cover
        >
        </v-img>
        <v-card-title class="item-title">
          {{ recipe.recipe.label }}
        </v-card-title>

        <v-card-actions class="item-action">
          <v-spacer></v-spacer>

          <v-btn
            v-if="user"
            size="small"
            color="surface-variant"
            variant="text"
            :icon="recipe.isFavorite ? 'mdi-heart' : 'mdi-cards-heart-outline'"
            @click="toggleFavorite(recipe)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
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
      const url = `${basrUrl}?type=public&q=${this.searchQuery}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.recipes = data.hits;
    },

    async isFavorite(recipe) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      const q = query(
        collection(db, collectionName),
        where("uri", "==", recipe.recipe.uri)
      );
      // Exécution de la requête
      const querySnapshot = await getDocs(q);
      console.log("is Favorite: ", !querySnapshot.empty);
      return !querySnapshot.empty;
    },

    async toggleFavorite(recipe) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      if (!recipe.isFavorite) {
        await addDoc(collection(db, collectionName), {
          uri: recipe.recipe.uri,
        });
      } else {
        const q = query(
          collection(db, collectionName),
          where("uri", "==", recipe.recipe.uri)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (document) => {
          await deleteDoc(doc(db, collectionName, document.id));
        });
      }
      recipe.isFavorite = !recipe.isFavorite;
    },
  },
  async mounted() {
    for (const recipe of this.recipes) {
      recipe.isFavorite = await this.isFavorite(recipe);
    }
    console.table(this.recipes);
  },
};
</script>

<style>
.item-cards .item-title {
  font-size: 15px;
}
.item-card {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 200px;
  margin-top: 80px;
}
.item-cards {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 500px;
}
.query-search {
  width: 500px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
}
.item-action{
  background-color: rgb(206, 201, 201);
}
</style>
