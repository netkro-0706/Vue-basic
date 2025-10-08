<template>
  <h1>{{ newTitle }}</h1>
</template>

<script>
import { computed } from "vue"

export default {
  props: ["appTitle"],
  setup(props) {
    const newTitle = computed(() => {
      return props.appTitle + "!!"
    })

    return { newTitle }
  },
}
</script>
