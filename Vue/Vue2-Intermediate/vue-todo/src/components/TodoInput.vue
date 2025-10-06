<template>
  <div class="inputBox shadow">
    <input
      type="text"
      ref="inputTodo"
      @keydown.enter="addTodo"
      v-model="newTodoItem"
    />
    <!-- <button class="addBtn" v-on:click="addTodo">add</button> -->
    <span class="addContainer addBtn" v-on:click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false" />
      </h3>
      <span slot="body">무언가를 입력하세요</span>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        const text = this.newTodoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
      this.$refs.inputTodo.focus();
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
