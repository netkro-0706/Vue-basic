<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
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
        <button class="btn" :disabled="!isUsernameValid || !isPasswordValid || !isNicknameValid" type="submit">Sign up</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from "@/api/auth";
import { validateEmail, validatePassword, validateNickname } from "@/utils/validation"

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
  computed:{
    isUsernameValid(){
      return validateEmail(this.username)
    },
    isPasswordValid(){
      return validatePassword(this.password)
    },
    isNicknameValid(){
      return validateNickname(this.nickname)
    },
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

<style scoped>
.btn {
  color: white;
}
</style>
