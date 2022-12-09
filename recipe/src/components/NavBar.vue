<script setup>
import { RouterLink, RouterView } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { useCurrentUser } from "vuefire";
const user = useCurrentUser();
</script>

<template>
  <div>
    <div class="nav-menu">
      <v-icon icon="mdi-menu" />

      <div class="nav-content">
        <div class="logo">RECETTES</div>

        <ul class="nav-items">
          <li v-if="user" class="item-link">
            <RouterLink to="/home">Accueil</RouterLink>
          </li>
          <li v-if="user" class="item-link">
            <RouterLink to="/about">A propos</RouterLink>
          </li>
          <li v-if="user" class="item-link">
            <RouterLink to="/recipes">Recettes</RouterLink>
          </li>
          <li>
            <RouterLink v-if="!user" to="/">Login - Register</RouterLink>
          </li>
        </ul>
        <div>
          <v-btn
            v-if="user"
            variant="outlined"
            color="primary"
            v-on:click="logout"
          >
            Se déconnecter
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
export default {
  methods: {
    async logout() {
      await signOut(getAuth());
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  background-color: white;
  height: 70px;
  padding: 0 30px;
  position: relative;
  margin: 0;
  box-shadow: 0px 2px 4px rgb(169 169 169 / 25%);
}
.logo {
  color: rgb(25, 118, 210);
  padding: 10px 16px;
}
.btn-login {
  color: white;
  background-color: rgb(25, 118, 210);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 0px 10px;
  }
}
i {
  display: none;
}
// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
