<template>
  <section>
    <v-subheader>
      <v-btn x-small fab text @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>完成总计：
      <span class="error--text">{{$store.state.me}} : {{$store.state.ta}}</span>
      <v-spacer />
      <span v-if="$store.state.me > $store.state.ta">会超过你的啦！</span>
      <span v-else-if="$store.state.me < $store.state.ta">比你多了哟！</span>
      <span v-else>一起加油吧~</span>
    </v-subheader>
    <v-simple-table>
      <thead>
        <tr>
          <th>分类</th>
          <th>内容</th>
          <th>完成时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in $store.state.done" :key="i">
          <td>
            <v-icon small :color="item.color | color">{{item.type | icon}}</v-icon>
          </td>
          <td>{{ item.content }}</td>
          <td>
            {{item.date | year}} {{item.time}}
            <v-icon x-small v-if="item.out == 1">mdi-timer-off</v-icon>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-btn @click="show" v-if="$store.state.btn" outlined block color="primary" class="margin">加载更多</v-btn>
  </section>
</template>

<script>
export default {
  name: "done",
  mounted() {
    if (!this.$store.state.login) {
      this.$router.replace("/login");
      return false;
    }
    this.$store.dispatch("more", {
      more: 0,
      login: this.$store.state.login
    });
  },
  methods: {
    show() {
      this.$store.dispatch("more", {
        more: this.$store.state.more,
        login: this.$store.state.login
      });
    },
    back() {
      this.$router.replace("/todo");
    }
  }
};
</script>

<style>
.margin {
  margin: 10px auto;
}
</style>
