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
  props: ["todoItems", "userId"],
  // context는 emit, ...으로 destruct해도 상관 없지만 props는 destruct하면 안된다.
  setup(props, { emit }) {
    const removeTodo = (item, index) => {
      emit("remove", item, index)
    }

    props.userId

    return { removeTodo }
  },
}
</script>

<style lang="scss" scoped></style>
