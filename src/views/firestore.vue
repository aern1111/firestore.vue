<template>
  <div class="bg">
    <div class="container">
      <img src="https://www.wattpad.com/img/errors/story-404.svg" />
      <b-form>
        <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="name"
            type="text"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="lastname"
            type="text"
            placeholder="Enter last name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Phone number"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="phonenumber"
            type="text"
            placeholder="Enter Phone number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email address"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="password"
            placeholder="Enter Password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="btn" variant="primary" @click="onSubmit">sign up</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      email: "",
      name: "",
      lastname: "",
      phonenumber: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      var form = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phonenumber: this.phonenumber,
        password: this.password,
      };
      db.collection("firestore").doc().set(form);
    },
  },
};
</script>

<style>
.container {
  background: rgb(239, 245, 245);
}
</style>