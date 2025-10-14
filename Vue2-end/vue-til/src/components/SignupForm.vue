<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="usename">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign up</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from "@/api/index";

export default {
  data() {
    return {
      // form values
      username: "",
      password: "",
      nickname: "",
      // log
      logMessage: "",
    };
  },
  methods:{
    async submitForm(){
      console.log("submit form");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      }
      const {data} = await registerUser(userData);
      console.log(data.username)
      this.logMessage = `${data.username} is join`
      this.initForm();
    },
    initForm(){
      this.username = "";
      this.password = "";
      this.nickname = "";
    }
  },
};
</script>

<style scoped></style>
