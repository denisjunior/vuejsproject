<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
</script>

<template>
  <main>
    <div id="login">
      <v-text-field label="email" v-model="email" />
      <v-text-field type="password" label="password" v-model="password" />
      <v-alert v-if="failed" type="error">Operation failed</v-alert>
      <v-btn class="btn-login" v-on:click="login">Se connecter</v-btn>
      <v-btn class="btn-register" v-on:click="register">S'inscrire</v-btn>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      failed: false,
    };
  },
  methods: {
    async register() {
      this.failed = false;
      try {
        await createUserWithEmailAndPassword(
          getAuth(),
          this.email,
          this.password
        );
        this.$router.push("/");
      } catch (error) {
        this.failed = true;
      }
    },
    async login() {
      this.failed = false;
      try {
        await signInWithEmailAndPassword(getAuth(), this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        this.failed = true;
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
.btn-register {
    margin-left: 15px;
    color: #ffffff;
    background-color: rgb(25, 118, 210);
}
</style>
