<template>
  <v-app>
    <router-view />
    <v-snackbar
      v-model="$store.state.snack.show"
      :color="$store.state.snack.color"
      top
      :timeout="1500"
    >{{$store.state.snack.text}}</v-snackbar>
    <addform />
  </v-app>
</template>

<script>
import addform from "./components/addform.vue";
export default {
  name: "App",
  components: {
    addform
  },
  // created() {
  //   this.$store.dispatch("weather");
  // }
};
</script>
