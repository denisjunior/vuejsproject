<script setup>
import axios from "axios";
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

    <div class="user-text">
      <p v-if="user">Bienvenue {{ user.email }}</p>
    </div>
    <div class="cards">
      <v-card
        class="card"
        variant="outlined"
        v-for="liste of listes"
        :key="liste.capital"
      >
        <v-img :src="liste.flags.png" class="align-end" height="200px" cover>
        </v-img>

        <v-card-actions>
          <v-card-title class="item-title">
            {{ liste.name.common }}
          </v-card-title>

          <v-spacer></v-spacer>

          <v-btn
            v-if="user"
            size="small"
            color="surface-variant"
            variant="text"
            :icon="liste.isFavorite ? 'mdi-heart' : 'mdi-cards-heart-outline'"
            @click="toggleFavorite(liste)"
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
      listes: [],
    };
  },
  methods: {
    async isFavorite(liste) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      const q = query(
        collection(db, collectionName),
        where("capital", "==", liste.capital)
      );
      // Exécution de la requête
      const querySnapshot = await getDocs(q);
      console.log("is Favorite: ", !querySnapshot.empty);
      return !querySnapshot.empty;
    },

    async toggleFavorite(liste) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      if (!liste.isFavorite) {
        await addDoc(collection(db, collectionName), {
          capital: liste.capital,
        });
      } else {
        const q = query(
          collection(db, collectionName),
          where("capital", "==", liste.capital)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (document) => {
          await deleteDoc(doc(db, collectionName, document.id));
        });
      }
      liste.isFavorite = !liste.isFavorite;
    },
  },

  async mounted() {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    console.log(result);
    this.listes = result.data;

    for (const liste of this.listes) {
      liste.isFavorite = await this.isFavorite(liste);
    }
    console.table(this.listes);
  },
};
</script>

<style scoped>
.user-text{
  margin: 15px;
  margin-left: 750px;
  font-size: 1.3em;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 100px;
  margin-top: 100px;
}
.card {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 500px;
}
</style>
