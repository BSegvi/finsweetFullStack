<template>
  <section class="author" v-if="isLoaded">
    <AuthorDetailHeader :data="authorDetail[0]"/>
    <AllPosts :data="authorDetail[0].posts" title="My Posts"/>
  </section>
</template>

<script setup>
import AllPosts from "@/components/AllPosts.vue";
import AuthorDetailHeader from "@/components/AuthorDetailHeader.vue"

import { ofetch } from "ofetch";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const authorDetail = ref({});
const isLoaded = ref(false)

onMounted(async () => {
  try {
    [authorDetail.value] = await Promise.all([
      ofetch(`http://localhost:3000${router.fullPath}`),
    ]);
    isLoaded.value = true
  } catch(e) {
    console.dir(e)
  }
  console.log(authorDetail.value)
});

console.log(router.fullPath)
</script>

<style lang="scss">
.author {
  .allPosts {
    margin: r(128) auto;
    h1 {
      border: none;
      max-width: r(1024);
      width: 100%;
      margin: 0 auto;
    }

    .readMore__YellowButton {
      display: none;
    }

    .allPosts__Wrapper {
      max-width: r(1024);
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
