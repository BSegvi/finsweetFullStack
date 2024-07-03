<template>
  <div class="companies container">
    <img src="/icons/finsweetCompanies.svg" alt="">
    <img src="/icons/finsweetCompaniesLogo.svg" alt="" v-for="n in 4">
  </div>
</template>

<style lang="scss" scoped>
  .companies {
    display: flex;
    // gap: r(75);
    justify-content: space-between;
    margin-bottom: r(128);
    @media (max-width: 1200px) {
      gap: r(65);
    }
    img {
      max-width: r(160);
      width: 100%;
      @media (max-width: 1200px) {
        max-width: r(120);
      }
    }

    img:first-of-type {
      max-width: r(136);
      width: 100%;
    }

  }
</style>

<script setup>
  
</script>