<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: ["todoItems"],
}
</script>

<style lang="scss" scoped></style>
