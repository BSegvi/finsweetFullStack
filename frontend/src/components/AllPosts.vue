<template>
  <div class="allPosts container">
    <h1>All posts</h1>
    <div class="allPosts__SinglePost" v-for="(post, index) in loadedPosts">
      <RouterLink
        :to="`/blog-post/${post.id}`"
        class="allPosts__SinglePostLink"
      >
        <img :src="images[index].imageSrc" alt="" />
        <div class="allPosts__SinglePostContent">
          <h3 />
          <h2 v-text="post.title" />
          <p v-text="post.content" />
        </div>
      </RouterLink>
    </div>

    <div class="allPosts__ReadMoreButton">
      <button
        @click="loadMore(2)"
        class="readMore__YellowButton"
        v-if="!isDisabled"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  data: {},
});

const numberOfPosts = ref(2);
const loadedPosts = ref([]);
const isDisabled = ref(false);

onMounted(() => {
  loadedPosts.value = props.data.slice(0, numberOfPosts.value);
});

const images = [
  {
    imageSrc: "/images/finsweetSinglePostsImage.png",
  },
  {
    imageSrc: "/images/finsweetBlogFeaturedPost.png",
  },
  {
    imageSrc: "/images/finsweetSinglePostsImage.png",
  },
  {
    imageSrc: "/images/finsweetBlogFeaturedPost.png",
  },
];

function loadMore(howMany) {
  let start = loadedPosts.value.length;
  let end = start + howMany;

  end = end >= props.data.length ? props.data.length : end;

  if (end === props.data.length) isDisabled.value = true;

  JSON.parse(JSON.stringify(props.data.slice(start, end))).forEach(
    (element) => {
      loadedPosts.value.push(element);
    }
  );
}
</script>

<style scoped lang="scss">
.allPosts {
  margin: r(64) auto;
  h1 {
    font-family: "Sen";
    font-size: r(48);
    line-height: r(64);
    letter-spacing: r(-2);
    font-weight: 700;
    padding-bottom: r(32);
    border-bottom: 1px solid rgba(109, 110, 118, 0.32);
  }
}

.allPosts__SinglePostLink {
  display: flex;
  align-items: center;
  gap: r(32);
  margin: r(64) 0;
  img {
    max-width: r(490);
    width: 100%;
    object-fit: contain;
  }

  h3 {
    font-size: r(16);
    line-height: r(20);
    letter-spacing: r(3);
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(89, 46, 169, 1);
  }

  h2 {
    font-family: "Sen";
    font-size: r(36);
    line-height: r(42);
    letter-spacing: r(-2);
    color: rgba(35, 37, 54, 1);
    margin: r(20) 0 r(16);
  }

  p {
    font-size: (16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
  }
}

.allPosts__ReadMoreButton {
  text-align: center;
}
</style>
