<template>
  <section class="category" v-if="isLoaded">
    <CategoryHeader :data="categoryData[0].category" />
    <div class="category__Content container">
      <AllPosts :data="posts" />
      <div class="category__List">
        <h3>Categories</h3>
        <div class="category__ListItem" v-for="category in allCategories">
          <a :href="`/category/${category.id}`">
            <img src="/icons/finsweetCategoriesBusiness.svg" alt="" />
            <h4 v-text="category.title" />
          </a>
        </div>

        <h3>All tags</h3>
        <div class="category__TagList">
          <div v-for="category in allCategories">
            <RouterLink :to="`/category/${category.id}`" class="category__TagListItem">
              {{ category.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AllPosts from "@/components/AllPosts.vue";
import CategoryHeader from "@/components/CategoryHeader.vue";
import { ofetch } from "ofetch";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const categoryData = ref({});
const isLoaded = ref(false);
const posts = ref([]);
const allCategories = ref([]);

onMounted(async () => {
  [categoryData.value, allCategories.value] = await Promise.all([
    ofetch(`http://localhost:3000${router.fullPath}`),
    ofetch("http://localhost:3000/categories"),
  ]);
  
  categoryData.value.forEach((element) => {
    posts.value.push(JSON.parse(JSON.stringify(element.post)));
  });
  isLoaded.value = true;
});
</script>

<style lang="scss">
.category {
  .allPosts {
    h1 {
      display: none;
    }
  }

  .allPosts {
    margin: 0 auto 0 0;
    max-width: r(838);
  }

  .allPosts__SinglePost {
    max-width: r(838);
  }

  .allPosts__SinglePostLink {
    margin-top: 0;

    img {
      max-width: r(294);
      width: 100%;
      object-fit: cover;
      min-height: r(312);
    }
  }

  .allPosts__SinglePostContent {
    h2 {
      font-family: "Sen";
      font-size: r(36);
      line-height: r(48);
      font-weight: 700;
      letter-spacing: r(-2);
      margin: r(20) 0 r(16);
    }
  }
}

.category__Content {
  display: flex;
  margin: r(128) auto r(128);
}

.category__List {
  max-width: r(298);
  width: 100%;
  h3 {
    font-family: "Sen";
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    margin-bottom: r(40);
    &:nth-of-type(2) {
      margin-top: r(48);
    }
  }
}

.category__ListItem {
  a {
    display: flex;
    align-items: center;
    max-width: r(298);
    width: 100%;
    background-color: white;
    font-family: "Sen";
    font-size: r(28);
    line-height: r(40);
    letter-spacing: r(-1);
    padding: r(28);
    border: 1.5px solid rgba(193, 193, 195, 1);
    cursor: pointer;
    transition: all .4s;
    &:hover {
      background-color: rgba(255, 208, 80, 1);
    }
  }

  & + .category__ListItem {
    margin-top: r(24);
  }
}

.category__TagList {
  display: flex;
  flex-wrap: wrap;
  gap: r(16);
}

.category__TagListItem {
  padding: r(8) r(32);
  border-radius: r(28);
  border: 1px solid rgba(35, 37, 54, 1);
  font-family: "Sen";
  font-size: r(14);
  line-height: r(32);
  font-weight: 700;
  color: rgba(35, 37, 54, 1);
  transition: all .4s;
  &:hover {
    background-color: rgba(35, 37, 54, 1);
    color: white;
  }
}
</style>
