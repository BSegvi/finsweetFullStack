<template>
  <section class="blog" v-if="isLoaded">
    <FeaturedPosts :data="sortedPosts[0]" />
    <AllPosts :data="sortedPosts"/>
    <Categories :data="categories" />
    <JoinUs />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ofetch } from "ofetch";
import JoinUs from "@/components/JoinUs.vue";
import Categories from "@/components/Categories.vue";
import FeaturedPosts from "@/components/FeaturedPosts.vue";
import AllPosts from "@/components/AllPosts.vue";

const categories = ref(null);
const isLoaded = ref(false);
const sortedPosts = ref(null);

onMounted(async () => {
  try {
    [categories.value, sortedPosts.value] = await Promise.all([
      ofetch("http://localhost:3000/categories"),
      ofetch("http://localhost:3000/featured-post"),
    ]);
    isLoaded.value = true;
  } catch (e) {
    console.dir(e);
  }
});
</script>
