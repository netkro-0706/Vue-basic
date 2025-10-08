<template>
  <TodoHeader :appTitle="title" />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
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
  data() {
    return {
      title: "할일 앱",
    }
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

    const removeTodoItem = (item, index) => {
      todoItems.value.splice(index, 1)
      localStorage.removeItem(item)
    }

    todoItems.value = fetchTodos()

    return { todoItems, addTodoItem, removeTodoItem }
  },
  // methods: {
  //   removeTodoItem(item, index) {
  //     this.todoItems.splice(index, 1)
  //     localStorage.removeItem(item)
  //   },
  // },
}
</script>

<style scoped></style>
