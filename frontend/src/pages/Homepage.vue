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
          <h3 v-text="data.super_title" />
          <h2 v-text="data.title" />
          <div class="homepage__HeroAuthorDate">
            <span v-text="data.author" />
            <time>{{ new Date(data.date).toLocaleDateString("hr-HR") }}</time>
          </div>
          <p v-text="data.description" />
          <a href="">
            <button class="readMore__YellowButton">
              {{ data.button_cta }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ofetch } from "ofetch";

const data = ref(null);
const isLoaded = ref(false);

onMounted(async () => {
  try {
    data.value = await ofetch("http://localhost:3000/homepage");
    console.log(data.value);
    data.value = data.value[0];
    console.log(data.value);
    isLoaded.value = true;
  } catch (e) {
    console.dir(e);
  }
});
</script>

<style scoped lang="scss">
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

  p {
    margin: r(16) 0 r(48);
  }
}

.homepage__HeroAuthorDate {
  font-size: r(16);
  line-height: r(28);
  font-weight: 400;
}
</style>
