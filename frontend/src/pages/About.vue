<template>
  <section class="about container" v-if="isLoaded">
    <div class="about__AboutUs">
      <div>
        <h3>ABOUT US</h3>
        <h2>We are a team of content writers who share their learnings</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <img
      src="/images/finsweetAboutPageSection.png"
      alt=""
      class="about__AboutSectionImage"
    />
    <HomeAbout :data="aboutSection" />
    <AboutContent :data="aboutPage[0].content" />
    <Authors :data="authors"/>
    <JoinUs />
  </section>
</template>

<script setup>
import AboutContent from "@/components/AboutContent.vue";
import Authors from "@/components/Authors.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import JoinUs from "@/components/JoinUs.vue";
import { ofetch } from "ofetch";
import { onMounted, ref } from "vue";

const aboutSection = ref({});
const aboutPage = ref({});
const isLoaded = ref(false);
const authors = ref([])

onMounted(async () => {
  [aboutSection.value, aboutPage.value, authors.value] = await Promise.all([
    ofetch("http://localhost:3000/about-section"),
    ofetch("http://localhost:3000/about-page"),
    ofetch("http://localhost:3000/homepage"),
  ]);
  authors.value = authors.value[0].authors
  isLoaded.value = true
});
</script>

<style lang="scss">
.about__AboutUs {
  position: relative;
  display: flex;
  gap: r(32);
  align-items: center;
  margin: r(80) auto r(-64);
  max-width: r(1133);
  width: 100%;
  > div {
    padding: r(64);
    background-color: white;
    max-width: r(624);
    width: 100%;
    h3 {
      font-size: r(16);
      line-height: r(20);
      font-weight: 500;
      letter-spacing: r(3);
    }

    h2 {
      font-family: "Sen";
      font-size: r(48);
      line-height: r(64);
      letter-spacing: r(-2);
      font-weight: 700;
    }
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    max-width: r(477);
    width: 100%;
  }
}

.about__AboutSectionImage {
  max-width: r(1280);
  width: 100%;
}

.about {
  .homeAbout {
    &:before {
      max-width: r(861);
      background: linear-gradient(
        90deg,
        rgba(89, 46, 169, 1) 0%,
        rgba(89, 46, 169, 1) 35%,
        rgba(255, 208, 80, 1) 35%,
        rgba(255, 208, 80, 1) 100%
      );
      left: r(109);
    }
  }
}
</style>
