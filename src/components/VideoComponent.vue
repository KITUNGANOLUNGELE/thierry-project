<template>
  <div style="height: 100vh" ref="container">
    <div class="flex justify-center q-mt-sm">
      <iframe
        :src="`https://www.youtube.com/embed/${videos?.id}`"
        frameborder="0"
        style="width: 50%; height: 90vh; overflow: hidden; border-radius: 6%"
        allowfullscreen
        class="shadow-10"
        ref="videoIframe"
      >
      </iframe>
    </div>
    <div class="flex justify-center">
      <q-btn
        color="green"
        icon="message"
        :label="videos?.comments?.length"
        flat
        @click="commenter(videos?.id)"
      />
      <q-btn
        color="red"
        icon="favorite"
        :label="videos?.favs"
        flat
        @click="lover(videos.id)"
      />
      <q-btn
        color="primary"
        :label="videos?.likes"
        icon="thumb_up"
        flat
        @click="liker(videos.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const container = ref(null);
const videoIframe = ref(null);
const { videos } = defineProps(["videos"]);
const emits = defineEmits(["commenter", "liker", "lover"]);
const commenter = (id) => {
  emits("commenter", id);
};
const liker = (id) => {
  emits("liker", id);
};
const lover = (id) => {
  emits("lover", id);
};
</script>

<style lang="scss" scoped></style>
