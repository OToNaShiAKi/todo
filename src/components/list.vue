<template>
  <v-timeline class="list" align-top dense>
    <v-timeline-item
      v-for="(item, i) in $store.state.todo"
      :key="i"
      :color="item.color | color"
      :icon="item.type | icon"
      fill-dot
    >
      <v-card dark :color="item.color | color">
        <v-subheader>
          {{item.date | year}} {{item.time}}
          <v-spacer />
          <v-btn @click="done(item)" v-if="item.color == $store.state.login" dark x-small text>
            <v-icon small>mdi-check</v-icon>
          </v-btn>
        </v-subheader>
        <v-card-text class="bgc">{{item.content}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "list",
  methods: {
    done(item) {
      let con = window.confirm("确认已完成？");
      if (con) this.$store.dispatch("done", item);
    }
  }
};
</script>

<style>
.list {
  background-color: white;
  border-top-left-radius: 36px;
  padding-right: 10px;
  min-height: calc(100% - 180px);
}
.bgc {
  background-color: white;
  color: #333 !important;
}
</style>
