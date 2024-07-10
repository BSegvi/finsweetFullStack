<template>
  <div class="aboutContent" v-for="item in data">
    <div class="aboutContent__Text">
      <h2 v-text="item.title" />
      <h3 v-text="item.small_title" />
      <p v-text="item.description" />
    </div>
    <div class="aboutContent__Image">
      <img src="/images/finsweetAboutContent.png" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {},
});
console.log(props.data);
</script>

<style lang="scss" scoped>
.aboutContent {
  display: flex;
  align-items: center;
  gap: r(137);
  margin-bottom: r(128);
  .aboutContent__Image {
    position: relative;
    max-width: r(624);
    width: 100%;
    object-fit: cover;
    &:before {
      position: absolute;
      content: "";
      display: block;
      top: r(114);
      left: r(-37);
      border-radius: 45% 0% 0% 0%;
      max-width: r(103);
      min-width: r(103);
      max-height: r(116);
      min-height: r(116);
      background-color: rgba(255, 208, 80, 1);
      z-index: 100;
    }
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    .aboutContent__Image:before {
      position: absolute;
      content: "";
      display: block;
      top: unset;
      bottom: r(-37);
      left: r(51.5);
      border-radius: 50%;
      max-width: r(74);
      min-width: r(74);
      max-height: r(74);
      min-height: r(74);
      background-color: rgba(89, 46, 169, 1);
      z-index: 100;
    }
  }
}

.aboutContent__Text {
  h2 {
    font-family: "Sen";
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    font-weight: 700;
  }

  h3 {
    font-family: "Sen";
    font-size: r(24);
    line-height: r(32);
    font-weight: 700;
    margin: r(16) 0;
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
  }
}
</style>
