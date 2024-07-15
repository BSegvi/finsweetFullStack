<template>
  <section class="homepage" v-if="isLoaded">
    <div class="homepage__Hero">
      <img
        src="/images/finsweet__HomepageHeroImage.png"
        alt=""
        class="homepage__HeroImage"
      />
      <div class="homepage__HeroTextWrapper container">
        <div class="homepage__HeroText">
          <h3 v-text="featuredHomepagePost[0].super_title" />
          <h2 v-text="featuredHomepagePost[0].title" />
          <div class="homepage__HeroAuthorDate">
            <p>
              <span>
                By
              </span>
              {{ featuredHomepagePost[0].first_name }} {{ featuredHomepagePost[0].last_name }}

            </p>
            <time>{{
              new Date(featuredHomepagePost[0].published_date).toLocaleDateString("hr-HR")
            }}</time>
          </div>
          <p v-text="featuredHomepagePost[0].content" />
          <RouterLink :to="`/blog-detail/${featuredHomepagePost[0].id}`">
            <button class="readMore__YellowButton">
              {{ homepageData.button_cta }}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
    <HomePosts :data="homepageData" :featured-posts="featuredHomepagePost"/>
    <HomeAbout :data="homepageData.homeAbout" />
    <Categories :data="homepageData.categories" />
    <Started :data="homepageData.started[0]" />
    <Authors :data="homepageData.authors" />
    <Companies />
    <Testimonials :data="homepageData.homepage_testimonials[0]" />
    <JoinUs />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ofetch } from "ofetch";
import HomePosts from "@/components/HomePosts.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import Categories from "@/components/Categories.vue";
import Started from "@/components/Started.vue";
import Authors from "@/components/Authors.vue";
import Companies from "@/components/Companies.vue";
import Testimonials from "@/components/Testimonials.vue";
import JoinUs from "@/components/JoinUs.vue";

const homepageData = ref([]);
const featuredHomepagePost = ref([]);
const isLoaded = ref(false);

onMounted(async () => {
  try {
    [homepageData.value, featuredHomepagePost.value] = await Promise.all([
      ofetch("http://localhost:3000/homepage"),
      ofetch("http://localhost:3000/featured-post"),
    ]);
    homepageData.value = homepageData.value[0];
    isLoaded.value = true;
  } catch (e) {
    console.dir(e);
  }
});
</script>

<style lang="scss">
.homepage {
  .homeAbout__Stats {
    display: none;
  }
}

.homepage__Hero {
  position: relative;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.homepage__HeroImage {
  position: relative;
  width: 100%;
  z-index: -10;
}

.homepage__HeroTextWrapper {
  position: absolute;
  max-width: r(1280);
  width: 100%;
  top: r(128);
  left: 50%;
  transform: translateX(-50%);
  padding: 0 r(25);
}

.homepage__HeroText {
  max-width: r(804);
  width: 100%;
  color: white;
  h3 {
    font-size: r(16);
    line-height: r(20);
    letter-spacing: r(3);
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Sen";
    font-size: r(56);
    line-height: r(64);
    letter-spacing: r(-2);
    font-weight: 700;
    margin: r(24) 0;
  }

  > p {
    max-width: r(599);
    width: 100%;
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    margin-bottom: r(48);
  }
}

.homepage__HeroAuthorDate {
  font-size: r(16);
  line-height: r(28);
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: r(24) 0 r(16);

  p {
    border-right: 1px solid white;
    padding-right: r(12);
    color: rgba(255, 208, 80, 1);
    span {
      color: white;
    }
  }

  time {
    padding-left: r(12);
  }
}
</style>
