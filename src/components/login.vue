<template>
  <section>
    <v-img :src="img"></v-img>
    <v-container class="care">{{care}}</v-container>
    <v-text-field
      placeholder="相约学习呀"
      v-model="login"
      @input="disable"
      type="password"
      class="login"
    ></v-text-field>
    <v-btn :disabled="btn" rounded class="study" color="info" @click="send">{{text}}</v-btn>
  </section>
</template>

<script>
import cloud from "../assets/cloud.png";

export default {
  name: "login",
  data: () => ({
    img: cloud,
    care: "比心~",
    btn: true,
    login: "",
    text: "学！"
  }),
  methods: {
    disable() {
      if (this.login.length) this.btn = false;
      else this.btn = true;
    },
    send() {
      this.$store.dispatch("login", this.login);
    }
  }
};
</script>

<style>
.login {
  width: 60% !important;
  margin: 0 auto;
}
.login input {
  text-align: center !important;
  font-size: 13px;
}
.study {
  width: 60% !important;
  display: block !important;
  margin: 10px auto !important;
}
.care {
  text-align: center;
  margin-bottom: 90px;
  color:#1976D2;
}
</style>