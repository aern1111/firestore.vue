import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAWdd3j_7cxs066V0gB0K3epUoho44vntI",
  authDomain: "firestore-a3188.firebaseapp.com",
  projectId: "firestore-a3188",
  storageBucket: "firestore-a3188.appspot.com",
  messagingSenderId: "850111884384",
  appId: "1:850111884384:web:801bbf05d874bbd27de705",
  measurementId: "G-CMXJLCF7J7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
