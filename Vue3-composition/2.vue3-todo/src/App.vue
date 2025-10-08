<template>
  <TodoHeader />
  <TodoInput @add="addTodoItem" />
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

    const addTodoItem = (todo) => {
      todoItems.value.push(todo)
      localStorage.setItem(todo, todo)
    }

    todoItems.value = fetchTodos()

    return { todoItems, addTodoItem }
  },
}
</script>

<style scoped></style>
