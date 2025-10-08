import { ref } from "vue"

function useTodo() {
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

  return { todoItems, addTodoItem, fetchTodos }
}

export { useTodo }
