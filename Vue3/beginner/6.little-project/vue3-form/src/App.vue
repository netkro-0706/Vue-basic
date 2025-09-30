<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID:</label>
      <input id="userId" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from "axios"
import { ref } from "vue"

export default {
  // composition api
  // 재사용화나 간결함이 필요할 때 더 좋다.
  setup() {
    // data
    const username = ref("")
    const password = ref("")

    // methods
    const submitForm = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          username: username.value,
          password: password.value,
        })
        .then((response) => {
          console.log(response)
        })
    }
    return { username, password, submitForm }
  },
  methods: {
    logText() {
      this.password
    },
  },

  // options api
  // data() {
  //   return {
  //     username: "",
  //     password: "",
  //   }
  // },
  // methods: {
  //   submitForm() {
  //     const data = {
  //       username: this.username,
  //       password: this.password,
  //     }
  //     axios
  //       .post("https://jsonplaceholder.typicode.com/users", data)
  //       .then((response) => {
  //         console.log(response)
  //       })
  //   },
  // },
}
</script>

<style scoped></style>
