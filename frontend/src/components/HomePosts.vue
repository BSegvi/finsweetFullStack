<template>
  <section class="posts container">
    <div class="postsGrid">
      <div class="posts__Featured">
        <h2>Featured Posts</h2>
        <div class="posts__FeaturedContent">
          <img src="/images/finsweetHomepagePosts.png" alt="" />
          <div class="posts__AuthorDate">
            <span>John Doe</span>
            <time>datum</time>
          </div>
          <h2 v-text="data.posts[0].title" />
          <p v-text="data.posts[0].content" />
          <button class="readMore__YellowButton">{{ data.button_cta }}</button>
        </div>
      </div>
      <div class="posts__All">
        <h2>All Posts</h2>
        <div v-for="item in data.posts">
          <div class="posts__AllAuthorDate">
            <span>Autor</span>
            <time>
              {{ new Date(item.published_date).toLocaleDateString("hr-HR") }}
            </time>
          </div>
          <h2 v-text="item.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    data: {}
  })
</script>

<style scoped lang="scss">
.posts {
  margin: r(128) auto;
  font-family: "Sen";
}

.postsGrid {
  display: grid;
  grid-template-columns: 58% 42%;
  gap: r(32);
}

.posts__Featured {
  width: 100%;
  img {
    max-width: r(669);
    width: 100%;
  }

  h2 {
    margin-bottom: r(64);
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
  }
}

.posts__FeaturedContent {
  margin-left: r(32);
  h2 {
    font-family: "Sen";
    font-size: r(28);
    line-height: r(40);
    font-weight: 700;
    letter-spacing: r(-1);
    margin: r(16) 0;
  }

  p {
    font-family: 'Inter';
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    margin-bottom: r(32);
  }
}

.posts__AuthorDate {
  margin-top: r(32);
}

.posts__All {
  > h2:first-of-type {
    margin-bottom: r(32);
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
  }

  > div {
    max-width: r(517);
    width: 100%;
    padding: r(32) r(32) r(25);
    &:hover {
      background-color: rgba(251, 246, 234, 1);
    }

    h2 {
      max-width: r(360);
      width: 100%;
      font-size: r(24);
      line-height: r(32);
      font-weight: 700;
    }
  }
}

.posts__AllAuthorDate {
  max-width: r(199);
  width: 100%;
  margin-bottom: r(8);
  font-size: r(14);
  line-height: r(20);
  font-weight: 500;
}
</style>
