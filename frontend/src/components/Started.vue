<template>
  <div class="started container">
    <img src="/images/finsweetStarted.png" alt="" />
    <div class="started__Content">
      <h3 v-text="data.super_title" />
      <h2 v-text="data.title" />
      <p v-text="data.description" />
      <RouterLink to="/about" class="readMore__YellowButton">{{ data.button_cta }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.started {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: r(128);
  img {
    max-width: r(949);
    width: 100%;
    @media (max-width: "1347px") {
      max-width: r(800);
    }
  }
}
.started__Content {
  margin-left: r(-375);
  max-width: r(706);
  min-width: r(706);
  max-height: r(584);
  background-color: white;
  padding: r(80);
  @media (max-width: "1347px") {
    max-width: r(606);
    min-width: r(606);
    max-height: r(500);
    padding: r(65);
  }
  h3 {
    font-family: "Inter";
    font-size: r(16);
    line-height: r(20);
    font-weight: 600;
    letter-spacing: r(3);
  }

  h2 {
    font-family: "Sen";
    font-size: r(48);
    line-height: r(64);
    font-weight: 700;
    letter-spacing: r(-2);
    margin: r(24) 0 r(16);
    @media (max-width: "1347px") {
      font-size: r(40);
      line-height: r(50);
      margin: r(20) 0 r(12);
    }
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
    margin-bottom: r(32);
  }
}
</style>

<script setup>
const props = defineProps({
  data: {},
});
</script>
