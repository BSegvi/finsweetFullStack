<template>
  <section class="testimonials container">
    <div class="testimonials__Description">
      <h3 v-text="data.super_title" />
      <h2 v-text="data.title" />
      <p v-text="data.description" />
    </div>
    <div class="testimonials__Slider">
      <div class="testimonials__SliderItemWrapper">
        <div
          class="testimonials__SliderItem"
          v-for="(item, index) in data.testimonials"
          v-show="index === currentSlide"
        >
          <p v-text="item.testimonial" />
          <div class="testimonials__SliderItemAuthor">
            <img src="/images/finsweetTestimonialsAuthor.png" alt="" />
            <div>
              <h4 v-text="item.testimonial_author" />
              <span v-text="item.testimonial_author_location" />
            </div>
            <div class="testimonials__SliderButtons">
              <button @click="previousSlide">
                <img src="/icons/finsweetBackButton.svg" alt="" />
              </button>
              <button @click="nextSlide">
                <img src="/icons/finsweetBackButton.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  data: {},
});

const currentSlide = ref(0);

function nextSlide() {
  if (currentSlide.value < props.data.testimonials.length - 1)
    currentSlide.value += 1;
}

function previousSlide() {
  if (currentSlide.value > 0) currentSlide.value -= 1;
}
</script>

<style lang="scss" scoped>
.testimonials {
  display: flex;
  gap: r(174);
  padding: r(92) r(111) r(75) r(112);
  background-color: rgba(251, 246, 234, 1);
  margin-bottom: r(128);
}

.testimonials__Slider {
  display: flex;
}

.testimonials__SliderItem {
  max-width: r(469);
  width: 100%;

  p {
    font-family: "Sen";
    font-size: r(24);
    font-weight: 700;
    line-height: r(32);
    margin-bottom: r(121);
  }
}

.testimonials__SliderItemAuthor {
  display: flex;
  align-items: center;
  gap: r(16);
  > div {
    h4 {
      font-family: "Sen";
      font-size: r(24);
      line-height: r(32);
      font-weight: 700;
    }

    span {
      font-family: "Inter";
      font-size: r(16);
      line-height: r(28);
      font-weight: 400;
      color: rgba(109, 110, 118, 1);
    }
  }
}

.testimonials__SliderButtons {
  margin-left: auto;
  button {
    border: none;
    background-color: unset;
    margin: 0;
    padding: 0;
    &:last-of-type {
      transform: rotate(180deg);
      margin-left: r(24);
    }
  }
}

.testimonials__Description {
  max-width: r(349);
  width: 100%;
  h3 {
    font-family: "Inter";
    font-size: r(16);
    line-height: r(20);
    font-weight: 600;
    letter-spacing: r(3);
    text-transform: uppercase;
  }

  h2 {
    font-family: "Sen";
    font-weight: 700;
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    margin: r(12) 0 r(16);
  }

  p {
    font-size: r(16);
  }
}
</style>
