<template>
  <div>
    <VideoComponent
      :videos="video"
      v-for="video in videos"
      :key="video.id"
      @commenter="(id) => openCommentaire(id)"
      @liker="(id) => liker(id)"
      @lover="(id) => lover(id)"
    />
  </div>
  <q-dialog v-model="commentaire" position="bottom">
    <q-card>
      <q-card-section>
        <commentComponent @commenter="(content) => commenter(content)" />
      </q-card-section>
      <q-card-section
        ><div v-if="content.length === 0">Soyez le premier à commenter...</div>
        <div v-else>
          <div v-for="c in content" :key="c.content" class="">
            <p class="q-mb-sm text-bold">{{ c.user }} :</p>
            <p class="q-mt-sm">{{ c.content }}</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import VideoComponent from "src/components/VideoComponent.vue";
import commentComponent from "src/components/commentComponent.vue";
import { onMounted, ref } from "vue";
const commentaire = ref(false);
const idcom = ref(null);
const content = ref(null);
const openCommentaire = (id) => {
  commentaire.value = !commentaire.value;
  idcom.value = id;
  content.value = videos.value.find((el) => el.id === id).comments;
};
const commenter = (content) => {
  const user = localStorage.getItem("user");
  videos.value
    .find((el) => el.id === idcom.value)
    .comments.push({ user: user, content: content });
};
const liker = (id) => {
  videos.value.find((el) => el.id === id).likes++;
};
const lover = (id) => {
  videos.value.find((el) => el.id === id).favs++;
};
const videos = ref([
  {
    id: "54h8TxJyNy0",
    comments: [],
    likes: 0,
    favs: 0,
  },
  {
    id: "Dp2SJN4UiE4",
    comments: [],
    likes: 0,
    favs: 0,
  },
  {
    id: "QzXnz0pIbsE",
    comments: [],
    likes: 0,
    favs: 0,
  },
  {
    id: "Apgxftz9SFM",
    comments: [],
    likes: 0,
    favs: 0,
  },
]);
onMounted(() => {
  localStorage.setItem("user", "hlungelehenock@gmail.com");
});
</script>

<style lang="scss" scoped></style>
