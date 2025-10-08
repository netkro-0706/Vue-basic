<template>
  <TodoHeader />
  <TodoInput />
  <TodoList />
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
}
</script>

<style scoped></style>
