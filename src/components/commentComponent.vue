<template>
  <div class="flex">
    <q-input
      v-model="text"
      type="text"
      label="Votre commentaire..."
      filled
      class="shadow-1 q-mr-auto"
      style="border-radius: 6px; width: 80%"
    />
    <q-btn color="primary" icon="send" flat @click="commenter(text)" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
const emits = defineEmits(["commenter"]);
const commenter = (t) => {
  emits("commenter", t);
  text.value = "";
};
</script>

<style lang="scss" scoped></style>
