<template>
  <TodoHeader />
  <TodoInput />
  <TodoList :todoItems="todoItems" />
</template>

<script>
import { ref } from "vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    const todoItems = ref([])

    const fetchTodos = () => {
      const result = []
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i)
        result.push(todoItem)
      }
      return result
    }

    todoItems.value = fetchTodos()

    return { todoItems }
  },
}
</script>

<style scoped></style>
