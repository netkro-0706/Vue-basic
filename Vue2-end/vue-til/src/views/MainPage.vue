<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"/>
      <ul v-else>
        <PostListItem
          v-for="(postItem, index) in postItems"
          :key="index"
          :postItem="postItem"
        />
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/index"
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import PostListItem from "@/components/posts/PostListItem.vue"

export default {
  components:{
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  methods:{
    async fetchData(){
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    }
  },
  created(){
    this.fetchData();
  }
}
</script>

<style scoped>

</style>