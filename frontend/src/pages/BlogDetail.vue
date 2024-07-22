<template>
  <section class="blogDetail container" v-if="isLoaded">
    <div class="blogDetail__Header">
      <div class="blogDetail__HeaderAuthorDate">
        <img src="/images/finsweetTestimonialsAuthor.png" alt="">
        <div>
          <RouterLink :to="`/author/${data.id}`">
            {{ data.first_name }} {{ data.last_name }}
          </RouterLink>
          <time>
            Posted on {{ new Date(data.published_date).toLocaleDateString('hr-HR') }}
          </time>
        </div>
      </div>
      <h1 v-text="data.title"/>
    </div>
    <img src="/images/finsweetBlogDetail.png" alt="" class="blogDetail__BannerImage">
    <div class="blogDetail__Content">
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
      </p>
    </div>
    <AllPosts :data="posts" flex-direction="row" flex-item-direction="column" numberOfItems="3" title="What to read next"/>
    <JoinUs />
  </section>
</template>

<script setup>
import { ofetch } from 'ofetch';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
import JoinUs from '@/components/JoinUs.vue';
import AllPosts from '@/components/AllPosts.vue';

const route = useRoute()

const data = ref([])
const posts = ref([])
const isLoaded = ref(false)

onMounted(async () => {
  try {
    [data.value, posts.value] = await Promise.all([
      ofetch(`http://localhost:3000${route.fullPath}`),
      ofetch('http://localhost:3000/posts')
    ])
    isLoaded.value = true;
  } catch(e) {
    console.dir(e);
  }
})
</script>

<style lang="scss">
.blogDetail {
  margin-top: r(128);
  .allPosts__SinglePost {
    max-width: r(405);
    width: 100%;
  }
}

.blogDetail__Content {
  max-width: r(843);
  width: 100%;
  margin: r(64) auto r(128);
  h4 {
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
    margin-top: r(16);
  }
}

.blogDetail__Header {
  max-width: r(768);
  width: 100%;
  margin: 0 auto;
  h1 {
    font-family: 'Sen';
    font-size: r(48);
    line-height: r(64);
    letter-spacing: r(-2);
    font-weight: 700;
    margin: r(24) 0 r(34);
  }
}

.blogDetail__HeaderAuthorDate {
  display: flex;
  align-items: center;
  gap: r(16);
  img {
    max-width: r(48);
    min-width: r(48);
    min-height: r(48);
    max-height: r(48);
  }

  > div {
    display: flex;
    flex-direction: column;
    a {
      font-family: 'Sen';
      font-size: r(28);
      line-height: r(40);
      letter-spacing: r(-1);
      font-weight: 700;
      color: rgba(89, 46, 169, 1);
      margin-bottom: r(-4);
    }

    time {
      font-size: r(16);
      line-height: r(28);
      font-weight: 400;
      color: rgba(109, 110, 118, 1);
    }
  }
}

.blogDetail__BannerImage {
  max-width: r(1280);
  width: 100%;
}

.blogDetail {
  .allPosts {
    h1 {
      border-bottom: none;
    }
  }
}
</style>