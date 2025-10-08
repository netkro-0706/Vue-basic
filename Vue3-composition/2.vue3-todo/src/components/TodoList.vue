<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["todoItems"],
  setup(props, context) {
    const removeTodo = (item, index) => {
      context.emit("remove", item, index)
    }

    return { removeTodo }
  },
}
</script>

<style lang="scss" scoped></style>
