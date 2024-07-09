<template>
  <div class="featuredPosts">
    <div class="featuredPosts__Wrapper container">
      <div class="featurePosts__Content">
        <h3 />
        <h2 v-text="data.title"/>
        <div class="featuredPosts__AuthorDate">
          <span>{{ data.first_name }} {{ data.last_name }}</span>
          <time v-text="new Date(data.published_date).toLocaleDateString('hr-HR')"/>
        </div>
        <p v-text="data.content"/>
        <RouterLink to="">
          <button class="readMore__YellowButton">
            Read More
          </button>
        </RouterLink>
      </div>
        <img src="/images/finsweetBlogFeaturedPost.png" alt="" class="featuredPosts__Image">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {}
})
</script>

<style lang="scss" scoped>
.featuredPosts__Wrapper {
  display: flex;
}

.featuredPosts__Image {
  max-width: r(515);
  width: 100%;
  object-fit: contain;
}

.featurePosts__Content {
  max-width: r(624);
  width: 100%;
  h2 {
    font-family: 'Sen';
    font-size: r(36);
    line-height: r(48);
    font-weight: 700;
    letter-spacing: r(-2);
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
    margin-bottom: r(24);
  }
}

.featuredPosts {
  background-color: rgba(244, 240, 248, 1);
  padding: r(94) 0;
}

.featuredPosts__AuthorDate {
  margin: r(16) 0;
  font-size: r(14);
  line-height: r(20);
  font-weight: 500;
  span {
    border-right: 1px solid black;
    padding-right: r(10);
    margin-right: r(10);
  }
}
</style>