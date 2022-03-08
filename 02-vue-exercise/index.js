import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { registerApplication, start } from "single-spa";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(Root);
    },
  },
});

registerApplication({
  name: "vue-app",
  app,
  activeWhen: ["/"],
});

start();
