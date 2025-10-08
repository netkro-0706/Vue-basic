<template>
  <TodoHeader :appTitle="title" />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted } from "vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import { useTodo } from "./hooks/useTodo"

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
    const { todoItems, addTodoItem, fetchTodos } = useTodo()

    // const removeTodoItem = (item, index) => {
    //   todoItems.value.splice(index, 1)
    //   localStorage.removeItem(item)
    // }

    // console.log("1 : setup called")

    // 라이프 사이클 api
    onBeforeMount(() => {
      // console.log("2 : onBeforeMount called")
      todoItems.value = fetchTodos()
    })

    onMounted(() => {
      //   console.log("3 : onMounted called")
    })

    // // 컴포넌트가 제거될 때 동작
    onUnmounted(() => {
      //   console.log("4 : onUnmounted called")
    })

    return { todoItems, addTodoItem }
  },
  methods: {
    removeTodoItem(item, index) {
      this.todoItems.splice(index, 1)
      localStorage.removeItem(item)
    },
  },
}
</script>

<style scoped></style>
