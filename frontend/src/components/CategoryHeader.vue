<template>
  <div class="categoryHeader">
    <div>
      <h1 v-text="data.title" />
      <p v-text="data.description" />
      <div class="categoryHeader__Links">
        <RouterLink to="/blog"> BLOG </RouterLink>
        <span>
          &nbsp > {{ data.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
data: {}
})
</script>

<style lang="scss" scoped>
.categoryHeader {
  > div {
    padding: r(80) 0;
    text-align: center;
    background-color: rgba(244, 240, 248, 1);
    h1 {
      margin: 0 auto;
      font-family: 'Sen';
      font-weight: 700;
      line-height: r(64);
      font-size: r(56);
      letter-spacing: r(-2);
      max-width: r(421);
      width: 100%;
    }

    p {
      margin: r(16) auto;
      font-size: r(16);
      line-height: r(28);
      font-weight: 400;
      text-align: center;
      color: rgba(109, 110, 118, 1);
      max-width: r(515);
      width: 100%;
    }
  }
}

.categoryHeader__Links {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: r(515);
  width: 100%;
  margin: 0 auto;
  font-size: r(16);
  line-height: r(20);
  letter-spacing: r(3);
  font-weight: 500;
  text-transform: uppercase;
}
</style>