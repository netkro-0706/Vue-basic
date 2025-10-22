<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username"/>
    </div>
    <div>
      <label for="password">password:</label>
      <input id="password" type="text" v-model="password"/>
    </div>
    <button :disabled="!isUsernameValid || !hasPassword" type="submit">Login</button>
    <p class="log-message">{{ logMessage }}</p>
  </form>
</template>

<script>
import {loginUser} from "@/api/index"
import { validateEmail, validatePassword } from "@/utils/validation"


export default {
  data(){
    return {
      // form values
      username: "",
      password: "",
      //log value
      logMessage: "",
      guidUser: "\nare you find this?: \nid: q@q.com \npw: qwe"
    }
  },
  computed:{
    isUsernameValid(){
      return validateEmail(this.username)
    },
    isPasswordValid(){
      return validatePassword(this.password)
    }
  },
  methods:{
    async submitForm(){
      try{
        const userData={
          username: this.username,
          password: this.password
        }
        const { data } = await loginUser(userData);
        // console.log(data.user);
        this.logMessage =  `${data.user.username} 님 환영합니다.`;
        this.initForm();
      } catch(error){
        // console.log(error.response.data)
        this.logMessage = `${error.response.data} ${this.guidUser}`;
        this.initForm();
      }
    },
    initForm(){
      this.username = "";
      this.password = "";
    }
  }
}
</script>

<style scoped>
.log-message {
  white-space: pre-wrap;
}

</style>