<template>
  <div v-for="post in mes_posts" :key="post.id" class="q-mt-lg shadow-10">
    {{ post.title }}
  </div>
  <div>
    <!-- <q-btn
      :icon="is_loged == true ? 'check' : 'error'"
      :label="is_loged ? 'Ok' : 'non'"
      @click="is_loged = !is_loged"
      :class="is_loged ? 'bg-green text-white' : 'bg-red text-white'"
    /> -->
  </div>
</template>

<script setup>
// import { ref } from "vue";

// const is_loged = ref(true);
import { postStore } from "src/stores/post";
import { computed, onMounted, ref } from "vue";

const postS = postStore();
const mes_posts = computed(() => postS.getPosts);
onMounted(() => {
  postS.fetch().then();
});
</script>

<style lang="scss" scoped></style>
