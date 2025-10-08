<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">delete</button>
    </li>
  </ul>
</template>

<script>
import { watch } from "vue"

export default {
  props: ["todoItems", "userId"],
  // context는 emit, ...으로 destruct해도 상관 없지만 props는 destruct하면 안된다.
  setup(props, { emit }) {
    const removeTodo = (item, index) => {
      emit("remove", item, index)
    }

    // 값이 변경이 될 때 마다 동작
    // 코드 동작의 추적이 어려워 지기 때문에 가능한 사용하지 않도록
    watch(props.todoItems, (newValue) => {
      console.log({ newValue })
    })

    return { removeTodo }
  },
}
</script>

<style lang="scss" scoped></style>
