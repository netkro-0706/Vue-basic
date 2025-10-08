import { ref } from "vue"

function useMessage() {
  const message = ref("hello")
  function changeMessage() {
    message.value = "hello world"
  }
  return { message, changeMessage }
}

export { useMessage }
