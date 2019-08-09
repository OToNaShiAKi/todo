<template>
  <section class="todo">
    <v-container class="padding">
      <v-layout d-flex justify-space-between align-baseline :ripple="false">
        <h1 class="remain">{{$store.state.remain}}</h1>
        <v-btn dark fab text @click="done">
          <v-icon>mdi-backburger</v-icon>
        </v-btn>
      </v-layout>
      <div>things remain</div>
    </v-container>
    <list />
    <v-fab-transition>
      <v-btn v-show="!$store.state.dialog" fixed bottom right color="#1976D2" dark fab @click="add">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </section>
</template>

<script>
import list from "./list.vue";

export default {
  name: "todo",
  components: {
    list
  },
  mounted() {
    if (this.$store.state.login && !this.$store.state.todo)
      this.$store.dispatch("login", this.$store.state.login);
    else if(!this.$store.state.login) this.$router.replace("/login");
  },
  methods: {
    add() {
      this.$store.dispatch("dialog", true);
    },
    done() {
      this.$router.replace("/done");
    }
  }
};
</script>

<style>
.todo {
  background-color: #1976d2;
  color: white;
  min-height: 100% !important;
}
.padding {
  padding: 30px 20px 0px 50px !important;
  box-sizing: border-box;
  height: 180px;
}
.remain {
  font-size: 60px;
}
</style>
