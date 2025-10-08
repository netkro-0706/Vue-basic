<template>
  <div>
    <input
      type="text"
      ref="inputRef"
      @keyup.enter="addTodo"
      v-model="todoInput"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup(props, context) {
    const todoInput = ref("")
    const inputRef = ref(null)

    const addTodo = () => {
      const todo = todoInput.value
      if (todo.length === 0) return
      context.emit("add", todo)

      todoInput.value = ""
      inputRef.value.focus()
    }

    return { todoInput, addTodo, inputRef }
  },
}
</script>

<style scoped></style>
