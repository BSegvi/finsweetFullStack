<template>
  <div class="homeAbout container">
    <div class="homeAbout__Item" v-for="item in data">
      <h3 v-text="item.super_title"/>
      <h2 v-text="item.title"/>
      <p v-text="item.description"/>
      <a href="" v-if="item.link_cta">{{ item.link_cta }}</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {}
})
</script>

<style scoped lang="scss">
.homeAbout {
  position: relative;
  display: flex;
  gap: r(61);
  justify-content: center;
  background-color: rgba(244, 240, 248, 1);
  padding-top: r(96);
  padding-bottom: r(96);
  width: 100%;
  margin-bottom: r(128);
  &:before {
    position: absolute;
    content: "";
    display: block;
    max-width: r(1061);
    width: 100%;
    min-height: r(23);
    max-height: r(23);
    background: linear-gradient(90deg, rgba(255, 208, 80, 1) 0%,rgba(255, 208, 80, 1) 75%, rgba(89,46,169,1) 75%, rgba(89,46,169,1) 100%);
    top: r(-23);
    right: 0
  }
}

.homeAbout__Item {
  max-width: r(516);
  width: 100%;
  h3 {
    font-family: 'Inter';
    font-size: r(16);
    line-height: r(20);
    letter-spacing: r(3);
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
   padding: r(24) 0 r(16); 
   max-width: r(494);
   font-family: 'Sen';
   font-size: r(36);
   line-height: r(48);
   letter-spacing: r(-2);
   font-weight: 700;
  }

  p {
    padding-bottom: r(16);
    font-family: 'Inter';
    font-weight: 400;
    font-size: r(16);
    line-height: r(28);
  }

  a {
    font-family: 'Sen';
    font-size: r(18);
    line-height: r(32);
    font-weight: 700;
  }
}
</style>