import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from "./router.js"

Vue.config.productionTip = false

Vue.filter('icon', type => {
  if (type == "数学") return "mdi-math-compass";
  else if (type == "英语") return "mdi-translate";
  else if (type == "设计") return "mdi-material-design";
  else if (type == "心理") return "mdi-heart";
  else if (type == "写文练字") return "mdi-fountain-pen";
  else if (type == "代码") return "mdi-code-tags";
  else if (type == "音乐") return "mdi-music";
  else if (type == "运动") return "mdi-run";
});
Vue.filter('color', color => {
  if (color == "0506") return "info";
  else if (color == "1204") return "warning";
});
Vue.filter('year', time => {
  time = time.split("-");
  return `${time[1]}-${time[2]}`;
});

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router
}).$mount('#app')