<template>
  <div>
    <input
      type="text"
      ref="inputRef"
      @keydown.enter="addTodo"
      v-model="todoInput"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const todoInput = ref("")
    const inputRef = ref(null)

    const addTodo = () => {
      const todo = todoInput.value
      localStorage.setItem(todo, todo)
      todoInput.value = ""
      inputRef.value.focus()
    }

    return { todoInput, addTodo, inputRef }
  },
}
</script>

<style scoped></style>
