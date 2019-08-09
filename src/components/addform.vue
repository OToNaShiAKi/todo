<template>
  <v-dialog v-model="$store.state.dialog">
    <v-card>
      <v-card-text>
        <v-select :prepend-icon="type | icon" v-model="type" :items="radio" label="选择分类"></v-select>
        <v-text-field v-model="content" @input="dis" prepend-icon="mdi-content-paste" label="内容"></v-text-field>
        <v-menu v-model="date_picker" transition="scale-transition" min-width="270px">
          <template v-slot:activator="{ on }">
            <v-text-field
              prepend-icon="mdi-calendar"
              v-model="date"
              label="截止日期"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            :allowed-dates="allowed"
            color="primary"
            v-model="date"
            no-title
            scrollable
          ></v-date-picker>
        </v-menu>
        <v-menu v-model="time_picker" transition="scale-transition" min-width="270px">
          <template v-slot:activator="{ on }">
            <v-text-field
              prepend-icon="mdi-clock-outline"
              v-model="time"
              label="截止时间"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker format="24hr" v-if="time_picker" v-model="time" full-width></v-time-picker>
        </v-menu>
      </v-card-text>
      <v-card-actions>
        <v-btn color="warning" text @click="back">返回</v-btn>
        <v-spacer />
        <v-btn color="info" :disabled="disable" text @click="sub">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "addform",
  data: () => ({
    radio: ["数学", "英语", "设计", "心理", "写文练字", "代码", "音乐", "运动"],
    type: "数学",
    date: new Date().toISOString().substr(0, 10),
    date_picker: false,
    time_picker: false,
    time: "22:00",
    content: "",
    disable: true
  }),
  methods: {
    back() {
      this.$store.dispatch("dialog", false);
    },
    dis() {
      if (this.content.length) this.disable = false;
      else this.disable = true;
    },
    allowed(val) {
      let day = new Date().toISOString().substr(0, 10);
      return val >= day;
    },
    sub() {
      this.$store.dispatch("sub", {
        date: this.date,
        time: this.time,
        content: this.content,
        type: this.type,
        color: this.$store.state.login,
        id: new Date().toISOString().substr(0, 19)
      });
    }
  }
};
</script>

<style>
.radio {
  margin-bottom: 10px;
}
</style>