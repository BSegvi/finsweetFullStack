<template>
  <div class="authorDetailHeader">
    <div class="authorDetailHeader__Content container">
      <img src="/images/finsweetAuthorDetail.png" alt="">
      <div class="authorDetailHeader__Description">
        <h1>
          {{ data.first_name }} {{ data.last_name }}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        </p>
        <div class="authorDetailHeader__Social">
          <img src="/icons/finsweetFacebook.svg" alt="" v-if="data.facebook">
          <img src="/icons/finsweetTwitter.svg" alt="" v-if="data.X">
          <img src="/icons/finsweetInstagram.svg" alt="" v-if="data.linkedin">
          <img src="/icons/finsweetLinkedin.svg" alt="" v-if="data.instagram">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {}
  })
</script>

<style lang="scss" scoped>
.authorDetailHeader {
  position: relative;
  padding: r(128);
  background-color: rgba(244, 240, 248, 1);
}

.authorDetailHeader__Content {
  position: relative;
  display: flex;
  // gap: r(32);
  justify-content: space-between;
  max-width: r(1024);  
  width: 100%;
  &::before {
    position: absolute;
    content: '';
    display: block;
    max-width: r(1024);
    width: 100%;
    min-height: r(24);
    max-height: r(24);
    background: linear-gradient(
        90deg,
        rgba(89, 46, 169, 1) 0%,
        rgba(89, 46, 169, 1) 35%,
        rgba(255, 208, 80, 1) 35%,
        rgba(255, 208, 80, 1) 100%
      );
    z-index: 100;
    bottom: r(-128);
    left: 0;
  }
  > img {
    max-width: r(251);
    width: 100%;
  }
}

.authorDetailHeader__Description {
  max-width: r(669);
  width: 100%;
  h1 {
    font-family: 'Sen';
    font-size: r(48);
    line-height: r(64);
    letter-spacing: r(-2);
    font-weight: 700;
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
    margin: r(24) 0;
  }
}

.authorDetailHeader__Social {
  img + img {
    margin-left: r(16);
  }
}
</style>