import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDZGwJqjBxvgGlSIUasHWgAKrY1C6rQg0Y",
  authDomain: "vue-calender-007.firebaseapp.com",
  databaseURL: "https://vue-calender-007.firebaseio.com",
  projectId: "vue-calender-007",
  storageBucket: "vue-calender-007.appspot.com",
  messagingSenderId: "1005184354577",
  appId: "1:1005184354577:web:6aae6720e25a5e9ae264b0",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
